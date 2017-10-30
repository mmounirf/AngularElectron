const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')
let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({ width: 800, height: 600 })
    
    //Production Env.

    // mainWindow.loadURL(url.format({
    //     pathname: path.join(__dirname, '/dist/index.html'),
    //     protocol: 'file:',
    //     slashes: true
    // }))

    //Dev.Env.
    
    mainWindow.loadURL('http://localhost:4200');


    // mainWindow.loadURL(url.format({
    //     pathname: path.join(__dirname, '/src/index.html'),
    //     protocol: 'file:',
    //     slashes: true
    // }))

    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})