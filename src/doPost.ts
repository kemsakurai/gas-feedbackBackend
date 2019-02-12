const id: string = PropertiesService.getScriptProperties().getProperty("FOLDER_ID");
import Utils from './Utils';
export const doPost = (e): GoogleAppsScript.Content.TextOutput => {
  Logger.log('doPost start');
  Logger.log('e>>>', e);
  const jsonString = e.parameter.feedback;
  const data = JSON.parse(jsonString);

  const url = data.url;
  const browser = JSON.stringify(data.browser);
  const comment = data.note;

  // Get sheet Object
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(Utils.getFeedBackSheetName());

  // Save spreadsheet
  const lastRow = sheet.getLastRow();
  // Save image png
  const decoded = Utilities.base64Decode(data.img.split(';base64,')[1]);
  const fileName = Utilities.formatDate(new Date(), 'JST', 'yyyy/MM/dd (E) HH:mm:ss Z') + '.png';
  const contentType = 'image/png';
  const blob: GoogleAppsScript.Base.Blob = Utilities.newBlob(decoded, contentType, fileName);
  const folder: GoogleAppsScript.Drive.Folder = DriveApp.getFolderById(id);
  const file = folder.createFile(blob);
  const appCodeName = browser['appCodeName'];
  const appName = browser['appName'];
  const appVersion = browser['appVersion'];
  const cookieEnabled = browser['cookieEnabled'];
  const onLine = browser['onLine'];
  const platform = browser['platform'];
  const userAgent = browser['userAgent'];
  const plugins: string = browser['plugins'].join();
  sheet.appendRow([url, comment, file.getUrl(), appCodeName, appName, appVersion,cookieEnabled, onLine, platform, userAgent,plugins]);
  
  // return Response
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify({ message: 'success!' }));
  Logger.log(output);
  return output;
};
