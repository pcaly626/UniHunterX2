
export const CREATE_ENCOUNTER = "CREATE_ENCOUNTER";
export const LOAD_ENCOUNTER = "LOAD_ENCOUNTER";
export const UPDATE_ENCOUNTER = "UPDATE_ENCOUNTER";

export interface Encounter {
    player:string,
    enemy: string,
    name: string,
    terrain: string
}

interface CreateAction { type: typeof CREATE_ENCOUNTER, payload: Encounter}
interface LoadAction { type: typeof LOAD_ENCOUNTER , payload: Encounter}
interface UpdateAction { type: typeof UPDATE_ENCOUNTER , payload: Encounter}


export type EncounterActionTypes = CreateAction | LoadAction | UpdateAction