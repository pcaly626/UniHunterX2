import React, {ChangeEvent} from 'react';

export interface EncounterElement {
    label: string;
    placeHolder: string;
    value: string;
    css: string;
    type: string;
    change: (event: ChangeEvent) => void;
    options: Array<{value:string}>;
}
