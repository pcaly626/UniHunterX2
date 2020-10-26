import React from 'react';
import { EncounterElement } from './InputTypes';

const input = (props : EncounterElement) =>{
    let inputElement;
    switch(props.type) {
        case 'input': inputElement = (<input key={props.label} className={props.css} value={props.value} placeholder={props.placeHolder} onChange={props.change}/>)
            break;
        case 'select':inputElement =
        <select className={props.css} onChange={props.change}>
            {props.options.map( option => (
                <option key={option.value}{...option}>
                    {option.value}
                </option>
            ))}
        </select>
        break;
        
        default: inputElement = <input key={props.label} />
    }
    return (
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
}


export default input;