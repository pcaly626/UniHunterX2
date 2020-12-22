
import axios from 'axios';
const { ipcRenderer } = window.require('electron');
import {EncounterActionTypes, Encounter, CREATE_ENCOUNTER, LOAD_ENCOUNTER} from '../types/ActionTypes';
import { Dispatch } from 'redux';

export const createEncounter = (encounter : Encounter) => (dispatch : Dispatch) =>{
    ipcRenderer.send('create-encounter', encounter);
    ipcRenderer.on( 'encounter-created', (event: Event, data : any ) =>
     dispatch({type: CREATE_ENCOUNTER, payload: data})
    )

    return 'encounter';
}

export const loadEncounter = () => {
    ipcRenderer.send('load-encounter');
    ipcRenderer.on( 'encounter-loaded', (event: Event, data : any ) => (dispatch : Dispatch) =>
        dispatch({type: LOAD_ENCOUNTER, payload: data})
    )
}

export const updateEncounter = (update : Encounter) => {
    ipcRenderer.send('update-encounter');
    ipcRenderer.on( 'encounter-updated', (event: Event, data : Encounter ) => (dispatch : Dispatch) =>
        dispatch({type: LOAD_ENCOUNTER, payload: data})
    )
}