
export interface EncounterElement {
    label: string;
    placeHolder: string;
    value: string;
    class: string;
    type: string;
    change: (event: ChangeEvent) => void;
    options: Array<{value:string,class:string}>;
}
