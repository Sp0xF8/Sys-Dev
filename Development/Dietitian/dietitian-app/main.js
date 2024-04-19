const { app, BrowserWindow } = require('electron');
const { resolve } = require('path');

let mainWindow;

function createWindow() {
  const dev = true;
  const appDir = resolve('./');

  // Dynamic import using import()
  import('next').then((next) => {
    const nextApp = next.default({ dev, dir: appDir });
    const nextHandler = nextApp.getRequestHandler();

    nextApp.prepare().then(() => {
      mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true,
        },
      });

      mainWindow.loadURL(
        dev ? 'http://localhost:3000' : `file://${appDir}/out/index.html`
      );

      mainWindow.on('closed', () => {
        mainWindow = null;
      });
    });
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
