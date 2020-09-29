import React from 'react';
import { EncounterElement } from './InputTypes';

const input = (props : EncounterElement) =>{
    let inputElement;
    switch(props.type) {
        case 'input': inputElement = (<input className={props.class} value={props.value} placeholder={props.placeHolder} onChange={props.change}/>)
            break;
        case 'select':inputElement =
        <select className={props.class} onChange={props.change}>
            {props.options.map( option => (
                <option {...option}>
                    {option.value}
                </option>
            ))}
        </select>
        break;
        
        default: inputElement = <input/>
    }
    return (
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
}


export default input;