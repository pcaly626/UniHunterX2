import React, {FormEvent} from 'react';
import Input from '../UI/Input/Input';
import './EncounterForm.css';
const encounterForm = ( props : any ) => {

    Object.keys(props.elements).forEach( key => { props.elements[key].change = (event: FormEvent) => props.handleChange(key, event) })

    return (
        
        <form className="EncounterForm" onSubmit={(event: FormEvent) => props.handleSubmit(event)}>
            {
                Object.keys(props.elements).map( key =>
                    <div className="row">
                        
                        <Input key={key} {...props.elements[key]} />
                        {
                            key == "player" || key == "enemy" ?
                                <div>
                                    <span onClick={() => props.add(key)}>add</span>
                                    <span onClick={() => props.remove(key)}>remove</span>
                                </div>
                            : null
                        }
                    </div>
            )}
            <button type="submit">Submit</button>
        </form>
    )
}

export default encounterForm;