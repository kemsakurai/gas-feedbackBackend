const id: string = 'xxx';
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
  sheet.appendRow([url, browser, comment]);

  // Save image png
  const decoded = Utilities.base64Decode(data.img.split(';base64,')[1]);
  const fileName = Utilities.formatDate(new Date(), 'JST', 'yyyy/MM/dd (E) HH:mm:ss Z') + '.png';
  const contentType = 'image/png';
  const blob: GoogleAppsScript.Base.Blob = Utilities.newBlob(decoded, contentType, fileName);
  const folder: GoogleAppsScript.Drive.Folder = DriveApp.getFolderById(id);
  const file = folder.createFile(blob);
  const range = sheet.getRange(lastRow + 1, 4);
  range.setValue([file.getUrl()]);
  
  // return Response
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify({ message: 'success!' }));
  Logger.log(output);
  return output;
};
