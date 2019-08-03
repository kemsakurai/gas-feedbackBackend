export const doGet = (e): GoogleAppsScript.Content.TextOutput => {
  Logger.log('doGet start');
  let output = ContentService.createTextOutput();
  let responseText;
  let result: any = new Object();
  result.html = HtmlService.createTemplateFromFile('index')
    .evaluate()
    .getContent();
  let callback = e.parameter.callback;
  if (callback) {
    responseText = callback + '(' + JSON.stringify(result) + ');';
    //Mime Typeをapplication/javascriptに設定
    output.setMimeType(ContentService.MimeType.JAVASCRIPT);
    output.setContent(responseText);
  } else {
    responseText = JSON.stringify(result);
    //Mime Typeをapplication/jsonに設定
    output.setMimeType(ContentService.MimeType.JSON);
    output.setContent(responseText);
  }
  return output;
};
