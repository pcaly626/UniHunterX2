import React, {FormEvent} from 'react';
import Input from '../UI/Input/Input';

const encounterForm = ( props : any ) => {

    Object.keys(props.elements).forEach( key => { props.elements[key].change = (event: FormEvent) => props.handleChange(key, event) })

    return (
        <form onSubmit={(event: FormEvent) => props.handleSubmit(event)}>
            {
                Object.keys(props.elements).map( key =>
                    <div className="row">
                        <Input key={key} {...props.elements[key]} />
                    </div>
            )}
            <button type="submit">Submit</button>
        </form>
    )
}

export default encounterForm;