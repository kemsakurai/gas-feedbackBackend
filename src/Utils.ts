export default class Utils {
  public static fetch(url: string, requestOptions: any) {
    const response = UrlFetchApp.fetch(url, requestOptions);
    return JSON.parse(response.getContentText());
  }

  public static getFeedBackSheetName() {
    return 'FeedBack';
  }

  public static getFunctionsURL() {
    let url = PropertiesService.getScriptProperties().getProperty('FUNCTIONS_URL');
    Utils.checkNotEmpty(url, 'FUNCTIONS_URL が 未設定です。FUNCTIONS_URL を設定してください。');
    return url;
  }
  /**
   * setNumberOfDescription
   * @param number
   */
  public static setNumberOfDescription(number: string): void {}
  public static setImageFolderId(folderId: string) {
    PropertiesService.getScriptProperties().setProperty('FOLDER_ID', folderId);
  }

  public static setFunctionsURL(url: string) {
    PropertiesService.getScriptProperties().setProperty('FUNCTIONS_URL', url);
  }

  public static getImageFolderId() {
    let id = PropertiesService.getScriptProperties().getProperty('FOLDER_ID');
    Utils.checkNotEmpty(id, 'FOLDER_ID が 未設定です。FOLDER_ID を設定してください。');
    return id;
  }
  /**
   * checkNotEmpty
   */
  public static checkNotEmpty(value: string, message: string) {
    if (typeof value === 'undefined' || value == '') {
      throw new Error(message);
    }
  }

  public static getColumValues(sheetName: string, columnName: string, startIndex: number) {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(sheetName);
    const values = sheet.getRange(columnName + ':' + columnName).getValues();
    let result = new Array();
    for (let i = 0; i < values.length; i++) {
      if (i >= startIndex) {
        if (values[i][0] != null && values[i][0] != '') {
          result.push(values[i]);
        }
      }
    }
    return result;
  }
}
