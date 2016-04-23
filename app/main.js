'use strict';

const electron = require('electron');
const fs = require('fs');

const app = electron.app;
const shell = electron.shell;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('ready', createWindow);

function createWindow () {

  mainWindow = new BrowserWindow({width: 1000, height: 600});

  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

let fullPath = '/home/thebigbignooby/dev/thebigbignooby.github.io/webpack.config.js';
// shell.showItemInFolder(fullPath);
// shell.openItem(fullPath);

// testStuff();

function testStuff() {
  fs.readFile(fullPath, 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
  });
}
