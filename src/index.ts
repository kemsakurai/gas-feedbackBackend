import { initialize } from './initialize';
import { createSchedule } from './createSchedule';
import { updateSchedule } from './updateSchedule';
import { doGet } from './doGet';
import { doPost } from './doPost';

function onOpen() {
  const menu = [
    { name: 'Initialize', functionName: 'initialize' },
    { name: 'Notice Mail', functionName: 'noticeMail' },
    { name: 'Schedule', functionName: 'createSchedule' }
  ];
  SpreadsheetApp.getActiveSpreadsheet().addMenu('gas-feedbackBackend', menu);
}

declare let global: any;
global.onOpen = onOpen;
global.initialize = initialize;
global.createSchedule = createSchedule;
global.updateSchedule = updateSchedule;
// global.noticeMail = noticeMail;
global.doGet = doGet;
global.doPost = doPost;
