const id: string = 'xxx';
import Utils from './Utils';
export const doPost = (e): GoogleAppsScript.Content.TextOutput => {
  Logger.log('doPost start');
  Logger.log('e>>>', e);
  var jsonString = e.parameter.feedback;
  var data = JSON.parse(jsonString);

  var url = data.url;
  var browser = JSON.stringify(data.browser);
  var comment = data.note;

  // シート取得
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(Utils.getFeedBackSheetName());
  // データ入力
  var lastRow = sheet.getLastRow();
  sheet.appendRow([url, browser, comment]);

  var decoded = Utilities.base64Decode(data.img.split(';base64,')[1]);
  var fileName = Utilities.formatDate(new Date(), 'JST', 'yyyy/MM/dd (E) HH:mm:ss Z') + '.png';
  var contentType = 'image/png';
  const blob: GoogleAppsScript.Base.Blob = Utilities.newBlob(decoded, contentType, fileName);
  const folder: GoogleAppsScript.Drive.Folder = DriveApp.getFolderById(id);
  var file = folder.createFile(blob);
  var range = sheet.getRange(lastRow + 1, 4);
  range.setValue([file.getUrl()]);
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify({ message: 'success!' }));
  Logger.log(output);
  return output;
};
