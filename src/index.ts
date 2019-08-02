import { initialize } from './initialize';
import { doGet } from './doGet';
import { doPost } from './doPost';

function onOpen() {
  const menu = [{ name: 'Initialize', functionName: 'initialize' }];
  SpreadsheetApp.getActiveSpreadsheet().addMenu('gas-feedbackBackend', menu);
}

declare let global: any;
global.onOpen = onOpen;
global.initialize = initialize;
global.doGet = doGet;
global.doPost = doPost;
