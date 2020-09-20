
const initialState = {
    encounter : []
}

export default function encounter(state : any = initialState, action: any) {

    switch( action.type ) {
        case "CREATE_ENCOUNTER": 
            return {
                ...state,
                encounter: action.payload
            }
        default:
            return {...state};
    }
}