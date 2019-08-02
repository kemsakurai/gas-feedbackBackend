import Utils from './Utils';

export const initialize = (): void => {
  Logger.log('initialize start');
  const configSheetName = Utils.getFeedBackSheetName();
  let feedBackSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(configSheetName);
  if (!feedBackSheet) {
    feedBackSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
    feedBackSheet.setName(configSheetName);
    const range = feedBackSheet.getRange('A1:D1');
    range.setBackground('yellow');
    const headers: string[] = new Array();
    headers.push('URL');
    headers.push('Comment');
    headers.push('Image Path');
    headers.push('Browser Infomation');
    range.setValues([headers]);
  }
  Logger.log('initialize end');
};
