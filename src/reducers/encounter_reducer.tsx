
const initialState = {
    encounter : []
}

export default function encounter(state : any = initialState, action: any) {

    switch( action.type ) {
        case "CREATE_ENCOUNTER": 
            return action.payload;
        default:
            return state;
    }
}