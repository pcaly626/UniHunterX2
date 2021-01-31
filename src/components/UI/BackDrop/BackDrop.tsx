import React from 'react';
import './BackDrop.css';

const backdrop = (props : any) => {
    let backDropClasses = ["BackDrop"]
    props.open ? backDropClasses.push('BackDropOpen') : backDropClasses.push('BackDropClose')

    return(
        <div className={backDropClasses.join(" ")}></div>
    )
}

export default backdrop;