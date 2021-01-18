import React, {Component} from 'react';
import './ActionModal.css'
import {ActionModalProps} from '../../../types/ActionModalTypes';

class ActionModal extends Component {
    state = {
        rollResult: 0,
        attackRollResult:0,
        target : {},
        combatants: []
    }

    handleRoll( dice : any, target : any ) {
        
        let attackRoll = Math.floor(Math.random() * 20) + 1;
        this.setState({attackRollResult: attackRoll})
        let total = 0;
        if(attackRoll >= target.armorClass) {


            for(let roll = 0; roll < dice.amount; roll++)
            {
                total += Math.floor(Math.random() * dice.type) + 1;
            }
            total += dice.modifier;
            this.setState({rollResult: total})
            this.state.target.health -= total;
        }
        else {
            this.setState({rollResult: total})
        }
    }

    selectTarget( combatants : any ) {
        let targetIndex = document.querySelector(".ActionModalTarget") != null ? document.querySelector(".ActionModalTarget").value : 0;
        console.log(targetIndex)
        console.log(document.querySelector(".ActionModalTarget"))
        let combatant = combatants[targetIndex];
        this.setState({target:combatant})
    }

    render() {
        const actionModalClasses = ["ActionModal"]
        console.log(this.props)
        console.log(this.state)
        let combatants = this.props.combatants;

        this.props.show ? actionModalClasses.push('ActionModalOpen') : actionModalClasses.push('ActionModalClose')
    
        return (
            <div className={actionModalClasses.join( " " )} >
                <button onClick={this.props.hide}>Back</button>
                <label>Target</label>
                <select className="ActionModalTarget" onChange={() => this.selectTarget(this.props.combatants)}>
                {
                    this.props.combatants.map( ( combatant, index ) => (<option value={index}>{ combatant.name }</option>))
                }
                </select>
    
                { 
                this.props.combatant ? 
                <div className="ActionModalHeader">
                    <div>

                    </div>
                    {
                        this.props.combatant.attacks.map( attack => (
                            attack.weapons.map( weapon => (
                                <div>
                                    <div>{weapon.name}</div>
                                    <div>Range: {weapon.range}</div>
                                    <div>Dice: {weapon.dice.amount}D{weapon.dice.type} + {weapon.dice.modifier}</div>
                                    <button onClick={ () => this.handleRoll(weapon.dice, this.state.target)}>Roll</button>
                                </div>
                        ))))
                    }
               </div>
                : <div></div>
                }
                <div>Roll Result: {this.state.rollResult}</div>
                <div>Attack Roll Result: {this.state.attackRollResult}</div>
            </div>
        )
    }
}

// const actionModal = ( props : ActionModalProps ) => {
//     const actionModalClasses = ["ActionModal"]
//     let combatants : any = props.combatants.getQueue();
  
//     props.show ? actionModalClasses.push('ActionModalOpen') : actionModalClasses.push('ActionModalClose')
    
//     return (
//         <div className={actionModalClasses.join( " " )} >
//             <button onClick={props.hide}>Back</button>
//             <label>Target</label>
//             <select className="ActionModalTarget">
//             {
//                 combatants.map( ( combatant, index ) => (<option value={index}>{ combatant.name }</option>))
//             }
//             </select>

//             { 
//             props.combatant ? 
//             <div className="ActionModalHeader">
//                 <div></div>
//                 {
//                     props.combatant.attacks.map( attack => (
//                         attack.weapons.map( weapon => (
//                             <div>
//                                 <div>{weapon.name}</div>
//                                 <div>Range: {weapon.range}</div>
//                                 <div>Dice: {weapon.dice.amount}D{weapon.dice.type} + {weapon.dice.modifier}</div>
//                                 <button onClick={ () => props.roll(weapon.dice)}>Roll</button>
//                             </div>
//                     ))))
//                 }
//            </div>
//             : <div></div>
//             }
//         </div>
//     )
// }

export default ActionModal;