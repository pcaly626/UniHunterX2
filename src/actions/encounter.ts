import axios from 'axios';
import { Action, ActionCreator, Dispatch } from 'redux';
const { ipcRenderer } = window.require('electron');

export const createEncounter = (encounter : any) => (dispatch: Dispatch) =>{

    ipcRenderer.send('create-encounter', encounter);

    ipcRenderer.on( 'encounter-created', (event: Event, data : any ) => {
        dispatch({
            type: "CREATE_ENCOUNTER",
            payload: data
        })
    })
}