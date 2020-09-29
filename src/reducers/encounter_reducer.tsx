
const initialState = {
    encounter : []
}


type Action = { type: "CREATE_ENCOUNTER", payload: string}

export default function encounter(state : any = initialState, action: Action) {

    switch( action.type ) {
        case "CREATE_ENCOUNTER": 
            return {
                ...state,
                encounter: action.payload
            }
        case "LOAD_ENCOUNTER": 
            return {
                ...state,
                encounter: action.payload
            }
        default:
            return {...state};
    }
}