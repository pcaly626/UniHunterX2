import React from 'react';
import {CombatantProps} from '../../../types/CombatantProps';
import "./Combatant.css";

const combatant = (props : CombatantProps) => {
    return(
    <div className="Combatant">
        {props.combatant.name}
    </div>);
}

export default combatant;