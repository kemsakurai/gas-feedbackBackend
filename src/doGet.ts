export const doGet = (): GoogleAppsScript.Content.TextOutput => {
  Logger.log('doGet start');
  let output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  let result: any = new Object();
  result.html = HtmlService.createTemplateFromFile('index')
    .evaluate()
    .getContent();
  output.setContent(JSON.stringify(result));
  return output;
};
