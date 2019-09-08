import { initialize } from './initialize';
import { doGet } from './doGet';
import { doPost } from './doPost';
import { inputFunctionsURL } from './inputFunctionsURL';
import { inputImageFolderId } from './inputImageFolderId';
import Utils from './Utils';

function onOpen() {
  const menu = [
    { name: 'Initialize', functionName: 'initialize' },
    { name: 'Input image folderId', functionName: 'inputImageFolderId' },
    { name: 'Input functions URL', functionName: 'inputFunctionsURL' }
  ];
  SpreadsheetApp.getActiveSpreadsheet().addMenu('gas-feedbackBackend', menu);
}

declare let global: any;
global.onOpen = onOpen;
global.initialize = initialize;
global.doGet = doGet;
global.doPost = doPost;
global.inputFunctionsURL = inputFunctionsURL;
global.inputImageFolderId = inputImageFolderId;
global.getFunctionsURL = Utils.getFunctionsURL;
