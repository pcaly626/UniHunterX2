import React, {ChangeEvent} from 'react';

export interface CreateEncounterState{
    createEncounterForm: {
        name : {
            label:string,
            placeHolder:string,
            value:string,
            class:string,
            type: string,
            change:  (event: ChangeEvent) => void,
            options: Array<{value:string,class:string}>;
        },
        player: {
            label:string,
            placeHolder:string,
            value:string,
            class:string,
            type: string,
            change:  (event: ChangeEvent) => void,
            options: Array<{value:string,class:string}>;
        },
        enemy: {
            label:string,
            placeHolder:string,
            value:string,
            class:string,
            type: string,
            change:  (event: ChangeEvent) => void,
            options: Array<{value:string,class:string}>;
        },
        terrain: {
            label:string,
            placeHolder:string,
            value:string,
            class:string,
            type: string,
            change:  (event: ChangeEvent) => void,
            options: Array<{value:string,class:string}>;
        }
    }
};