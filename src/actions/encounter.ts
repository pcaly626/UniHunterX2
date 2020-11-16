
const { ipcRenderer } = window.require('electron');
import axios from 'axios';
import {EncounterActionTypes, Encounter, CREATE_ENCOUNTER, LOAD_ENCOUNTER} from './action_types';
import { Dispatch } from 'redux';

export const createEncounter = (encounter : Encounter) => (dispatch : Dispatch) =>{
    ipcRenderer.send('create-encounter', encounter);
    ipcRenderer.on( 'encounter-created', (event: Event, data : any ) =>
     dispatch({type: CREATE_ENCOUNTER, payload: data})
    )

}

export const loadEncounter = () => {
    ipcRenderer.send('load-encounter');
    ipcRenderer.on( 'encounter-loaded', (event: Event, data : Encounter ) => (dispatch : Dispatch) =>
        dispatch({type: LOAD_ENCOUNTER, payload: data})
    )
}

export const updateEncounter = (update : Encounter) => {
    ipcRenderer.send('update-encounter');
    ipcRenderer.on( 'encounter-updated', (event: Event, data : Encounter ) => (dispatch : Dispatch) =>
        dispatch({type: LOAD_ENCOUNTER, payload: data})
    )
}