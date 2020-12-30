import React from 'react';
import { EncounterElement } from '../../../types/InputTypes';
import Plus from '../../../assets/icons/plus.svg';
const input = (props : EncounterElement) =>{
    let inputElement;
  
    switch(props.type) {
        case 'input': inputElement = (<input key={props.label} type="text" className={props.css} value={props.value} placeholder={props.placeHolder} onChange={props.change}/>)
            break;
        case 'select':inputElement =
        <select key={props.label} className={props.css} onChange={props.change}>
            {props.options.map( (option, index) => (
                <option key={index}{...option}>
                    {option.value}
                </option>
            ))}
        </select>
        break;
        
        default: 
            inputElement = <input key={props.label} />
            break;
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