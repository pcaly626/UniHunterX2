import React, {FormEvent} from 'react';
import Input from '../UI/Input/Input';
import Plus from '../../assets/icons/plus.svg';
import Minus from '../../assets/icons/minus.svg';
import './EncounterForm.css';
import { ProgressPlugin } from 'webpack';

const encounterForm = ( props : any ) => {

    Object.keys(props.elements).forEach( key => { props.elements[key].change = (event: FormEvent) => props.handleChange(key, event) })

    return (
        <form onSubmit={(event: FormEvent) => props.handleSubmit(event)}>
            <div className="EncounterForm">
                <div className="row">    
                    <div className="col-2"></div>
                    <div className="col-10">
                        <Input key={props.elements.name} {...props.elements.name} />
                        <label>{props.elements.player.label}</label>
                        <div className="Stack">
                            <select className={props.elements.player.css} onChange={props.elements.player.change}>
                                {props.elements.player.options.map( option => (
                                    <option key={option.value}{...option}>
                                        {option.value}
                                    </option>
                                ))}
                            </select>
                            <img src={Plus} onClick={()=>props.add('player') } />
                        </div>
                        <label>{props.elements.enemy.label}</label>
                        <div className="Stack">
                            <select className={props.elements.enemy.css} onChange={props.elements.enemy.change}>
                                {props.elements.enemy.options.map( option => (
                                    <option key={option.value}{...option}>
                                        {option.value}
                                    </option>
                                ))}
                            </select>
                            <img src={Plus} onClick={()=>props.add('enemy') } />
                        </div>
                        <Input key={props.elements.terrain} {...props.elements.terrain} />   
                    </div>
                </div>
                <div className="row">
                    <div className="col-8"></div>
                    <div className="col-4">
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default encounterForm;