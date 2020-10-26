import React, {ChangeEvent} from 'react';

export interface CreateEncounterState{
    createEncounterForm: {
        name : {
            label:string,
            placeHolder:string,
            value:string,
            css:string,
            type: string,
            change:  (event: ChangeEvent) => void,
            options: Array<{value:string}>;
        },
        player: {
            label:string,
            placeHolder:string,
            value:string,
            css:string,
            type: string,
            change:  (event: ChangeEvent) => void,
            options: Array<{value:string}>;
        },
        enemy: {
            label:string,
            placeHolder:string,
            value:string,
            css:string,
            type: string,
            change:  (event: ChangeEvent) => void,
            options: Array<{value:string}>;
        },
        terrain: {
            label:string,
            placeHolder:string,
            value:string,
            css:string,
            type: string,
            change:  (event: ChangeEvent) => void,
            options: Array<{value:string}>;
        }
    },
    sendToEncounter?: any | null
};