const { app, BrowserWindow } = require('electron');



function createWindow() {
    win = new BrowserWindow({width: 800, height: 800});
    win.loadFile('dist/demo/index.html');
    // win.loadURL('file://' + __dirname + 'dist/demo/index.html');

    // const startUrl = path.join(__dirname, 'dist/demo/index.html');
    // win.loadURL('file://' + startUrl);

    win.webContents.openDevTools();

    // Inject Google Analytics script when the window is ready

    // win.webContents.on('did-finish-load', () => {
    //     win.webContents.executeJavaScript(`
    //     console.log('Google Analytics script executed successfully');
    //         window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
    //         ga('create', 'G-71RWQX1NQT', 'auto');
    //         ga('send', 'pageview');
    //     `);
    // });
    
}

app.whenReady().then(() => {
    createWindow();
    // win.webContents.openDevTools()
})
