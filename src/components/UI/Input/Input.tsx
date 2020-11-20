import React from 'react';
import { EncounterElement } from '../Types/InputTypes';
import Plus from '../../../assets/icons/plus.svg';
const input = (props : EncounterElement) =>{
    let inputElement;
    switch(props.type) {
        case 'input': inputElement = (<input key={props.label} type="text" className={props.css} value={props.value} placeholder={props.placeHolder} onChange={props.change}/>)
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
            <br/>
            <div className="row">
            {inputElement}
            </div>
        </div>
    )
}


export default input;