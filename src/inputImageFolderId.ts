import Utils from './Utils';
export const inputImageFolderId = (): void => {
  let ui = SpreadsheetApp.getUi();
  let response = ui.prompt('画像の格納先となるFolderのIDを入力してください。');
  let folderId = response.getResponseText();
  // getSelectedButtonでクリックされたボタンの情報を取得できる。入力値なしか×ボタンをクリックされたかの確認をしている
  if (folderId == '' || response.getSelectedButton() == ui.Button.CLOSE) {
    return;
  }
  Utils.setImageFolderId(folderId);
  ui.alert('入力した値をFolderのIDとして設定しました。');
};
