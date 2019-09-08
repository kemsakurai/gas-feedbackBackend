import Utils from './Utils';
export const inputFunctionsURL = (): void => {
  let ui = SpreadsheetApp.getUi();
  let response = ui.prompt('リクエストを中継するGoogle Cloud FunctionsのURLを入力してください。');
  let url = response.getResponseText();
  // getSelectedButtonでクリックされたボタンの情報を取得できる。入力値なしか×ボタンをクリックされたかの確認をしている
  if (url == '' || response.getSelectedButton() == ui.Button.CLOSE) {
    return;
  }
  Utils.setFunctionsURL(url);
  ui.alert('入力した値をGoogle Cloud FunctionsのURLとして設定しました。');
};
