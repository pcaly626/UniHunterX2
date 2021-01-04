import React from 'react';
import './ActionModal.css'
import {ActionModalProps} from '../../../types/ActionModalTypes';

const actionModal = ( props:ActionModalProps ) => {
    const actionModalClasses = ["ActionModal"]
    props.show ? actionModalClasses.push('ActionModalOpen') : actionModalClasses.push('ActionModalClose')
    
    return (
        <div className={actionModalClasses.join( " " )} >
            <button onClick={props.hide}>Back</button>
            { 
            props.combatant ? 
            <div className="ActionModalCombatant">
                <div className="Name">{props.combatant.name}</div>
                <div>Armor Class: {props.combatant.armorClass}</div>
                <div className="Name"> Weapons </div>
                {
                    props.combatant.type == "player" ? 
                    props.combatant.attacks.map( attack => (
                        attack.weapons.map( weapon => (
                            <div>
                                <div>{weapon.name}</div>
                                <div>Range: {weapon.range}</div>
                                <div>Dice: {weapon.dice.amount}D{weapon.dice.type} + {weapon.dice.modifier}</div>
                                <button>Roll</button>
                            </div>
                    ))))
                    :
                    props.combatant.attacks.map( attack => (
                       attack.actions.map( action => (
                                <div>
                                    <div>{action.name}</div>
                                    <div>Range: {action.range}</div>
                                    <div>Dice: {action.dice.amount}D{action.dice.type} + {action.dice.modifier}</div>
                                    <button>Roll</button>
                                </div>
                    ))))
                }
           </div>
            : <div></div>
            }
        </div>
    )
}

export default actionModal;