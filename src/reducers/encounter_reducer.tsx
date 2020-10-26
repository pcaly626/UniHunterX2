import { EncounterActionTypes, CREATE_ENCOUNTER, LOAD_ENCOUNTER } from '../actions/action_types';
const initialState = {
    encounter : {}
}

export default function(state : any = initialState, action: EncounterActionTypes) {
    switch( action.type ) {
        case CREATE_ENCOUNTER: 
            return {
                ...state,
                encounter: action.payload
            }
        case LOAD_ENCOUNTER: 
            return {
                ...state,
                encounter: action.payload
            }
        default:
            return {...state};
    }
}