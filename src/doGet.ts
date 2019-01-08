export const doGet = (): GoogleAppsScript.Content.TextOutput => {
  Logger.log('doGet start');
  return ContentService.createTextOutput('doGet() called!');
};
