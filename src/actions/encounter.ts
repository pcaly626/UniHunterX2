
const { ipcRenderer } = window.require('electron');

interface FormElement {
    player:string,
    enemy: string,
    name: string,
    terrain: string
}

export type Action = { type: "CREATE_ENCOUNTER", payload: string}


export const createEncounter = (encounter : FormElement) =>{
    console.log("CREATE ENCOUNTER");
    ipcRenderer.send('create-encounter', encounter);

    ipcRenderer.on( 'encounter-created', (event: Event, data : any ):Action =>({
           type: "CREATE_ENCOUNTER",
            payload: data
        })
    )
}