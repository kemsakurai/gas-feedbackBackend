import Utils from './Utils';

export const initialize = (): void => {
  Logger.log('initialize start');
  const configSheetName = Utils.getFeedBackSheetName();
  let feedBackSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(configSheetName);
  if (!feedBackSheet) {
    feedBackSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
    feedBackSheet.setName(configSheetName);
    const range = feedBackSheet.getRange('A1:K1');
    range.setBackground('yellow');
    const headers: string[] = new Array();
    headers.push('URL');
    headers.push('Comment');
    headers.push('Image Path');
    headers.push('[Browser Infomation] appCodeName');
    headers.push('[Browser Infomation] appName');
    headers.push('[Browser Infomation] appVersion');
    headers.push('[Browser Infomation] cookieEnabled');
    headers.push('[Browser Infomation] onLine');
    headers.push('[Browser Infomation] platform');
    headers.push('[Browser Infomation] userAgent');
    headers.push('[Browser Infomation] plugins');
    range.setValues([headers]);
  }
  Logger.log('initialize end');
};
