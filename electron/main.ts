import { app, BrowserWindow, ipcRenderer, ipcMain, IpcMainEvent } from 'electron';

import * as path from 'path';
import * as url from 'url';
import fs from 'fs';


let mainWindow : BrowserWindow | null;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    if(process.env.NODE_ENV === 'development') {
        mainWindow.loadURL(`http://localhost:4000`);
    }
    else {
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, '../public/index.html'),
                protocol: 'file:',
                slashes: true
            })
        )
    }

    mainWindow.on('closed', ()=>{
        mainWindow = null;
    })
}

app.on('ready', createWindow);
app.allowRendererProcessReuse = true;


ipcMain.on('create-encounter', (event: IpcMainEvent, data : any ) =>{

    fs.writeFile(
        path.join(process.cwd(),'electron','encounters','encounter.json'), JSON.stringify(data), function(err){
            if(err){
                return console.error(err);
            }
            console.log('File Created')
        }
    )

    mainWindow?.webContents.send('encounter-created', data);
})