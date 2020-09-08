import React, {Fragment} from 'react';

const inputElement ={
    label:"",
    placeHolder:"",
    value:"",
    class:"",
    type: "",
    options: [
        {
            value:"",
            class:"",
        }
    ]
}
type InputElement = typeof inputElement;

const input = (props : InputElement ) =>{
    let inputElement;
    switch(props.type) {
        case 'input': inputElement = (<input className={props.class} value={props.value} placeholder={props.placeHolder} />)
            break;
        case 'select':inputElement =
        <select className={props.class} >
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