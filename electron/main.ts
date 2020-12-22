import { app, BrowserWindow, ipcRenderer, ipcMain, IpcMainEvent, screen } from 'electron';

import * as path from 'path';
import * as url from 'url';
import fs from 'fs';


let mainWindow : BrowserWindow | null;

function createWindow() {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    mainWindow = new BrowserWindow({
        width: width,
        height: height,
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

ipcMain.on('create-encounter', ( event: IpcMainEvent, data : any ) =>{
    console.log(data)
    let players : Array<Object> = [];
    let enemies : Array<Object> = [];
    let formData = data;
    formData.players.map( (player : string) => {
        let reader = fs.readFileSync(path.join(process.cwd(),'electron','players',`${player}.json`), function(err, data) {
                if(err){
                    return console.error(err);
                }
            });
        players.push(JSON.parse(reader));
    });
    formData.enemies.map( (enemy:string) => {
        let reader = fs.readFileSync(path.join(process.cwd(),'electron','enemies',`${enemy}.json`), function(err, data) {
                if(err){
                    return console.error(err);
                }
            });
        enemies.push(JSON.parse(reader));
    });
    data.players = players;
    data.enemies = enemies;
    fs.writeFileSync(
        path.join(process.cwd(),'electron','encounters','encounter.json'), JSON.stringify(data), function(err){
            if(err){
                return console.error(err);
            }
            console.log('File Created')
        })
    console.log(players)
    console.log(enemies)
    console.log(data)
    mainWindow?.webContents.send('encounter-created', data);
})

ipcMain.on('load-encounter', (event: IpcMainEvent ) =>{
    let encounter = fs.readFileSync(path.join(process.cwd(),'electron','encounters','encounter.json'), {encoding: 'utf8', flag: 'r'})
    console.log("LOAD ENCOUNTER")

    mainWindow?.webContents.send('encounter-loaded', encounter);
})

ipcMain.on('update-encounter', (event: IpcMainEvent, data : any ) =>{
    fs.writeFile(
        path.join(process.cwd(),'electron','encounters','encounter.json'), JSON.stringify(data), function(err){
            if(err){
                return console.error(err);
            }
            console.log('File Updated')
        }
    )
    mainWindow?.webContents.send('encounter-updated', data);
})