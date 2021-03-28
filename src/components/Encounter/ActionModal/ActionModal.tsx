import React, {Component} from 'react';
import './ActionModal.css'
import {ActionModalProps} from '../../../types/ActionModalTypes';
import {Player, Enemy, Weapon, Spell} from '../../../types/EncounterTypes';
import {target} from '../../../../webpack.electron.config';

class ActionModal extends Component {
    state = {
        rollResult: 0,
        attackRollResult: 0,
        target: {},
        combatants: []
    }

    handleWeapon(dice : any, target : any) {
        let attackRoll = Math.floor(Math.random() * 20) + 1;
        this.setState({attackRollResult: attackRoll})
        let total = 0;
        if (attackRoll >= target.armorClass) {
            for (let roll = 0; roll < dice.amount; roll++) {
                total += Math.floor(Math.random() * dice.type) + 1;
            }
            total += dice.modifier;
            this.setState({rollResult: total})
            this.state.target.health -= total;
        } else {
            this.setState({rollResult: total})
        }
    }
    
    handleSpell(dice : any, target : any) {
    
    }

    selectTarget(combatants : any) {
        let targetIndex = document.querySelector(".ActionModalTarget") != null ? document.querySelector(".ActionModalTarget").value : 0;
        let combatant = combatants[targetIndex];
        this.setState({target: combatant})
    }

    render() {
        const actionModalClasses = ["ActionModal"]
        this.props.show ? actionModalClasses.push('ActionModalOpen') : actionModalClasses.push('ActionModalClose')
        return (
            <div className={
                actionModalClasses.join(" ")
            }>
                <button onClick={
                    this.props.hide
                }>Back</button>
                <label>Target</label>
                <select className="ActionModalTarget"
                    onChange={
                        () => this.selectTarget(this.props.combatants)
                }>
                    {
                    this.props.combatants.map((combatant, index) => (
                        <option value={index}>
                            {
                            combatant.name
                        }</option>
                    ))
                } </select>

                {
                this.props.combatant ? <div className="ActionModalHeader">
                    <div>
                        <div>
                            <h4>Weapons</h4>
                            <div className="row">
                                {
                                this.props.combatant.attacks.weapons.map(attack => (
                                    <div>
                                        <div>{
                                            attack.name
                                        }</div>
                                        <div>Range: {
                                            attack.range
                                        }</div>
                                        <div>Dice: {
                                            attack.dice.amount
                                        }D{
                                            attack.dice.type
                                        }
                                            + ${
                                            attack.dice.modifier
                                        }</div>
                                        <button onClick={
                                            () => this.handleWeapon(attack.dice, this.state.target)
                                        }>Roll</button>
                                    </div>
                                ))
                            } </div>
                        </div>
                        <div>
                            <h4>Spells</h4>
                            <div className="row">
                                {
                                this.props.combatant.attacks.spells.map(attack => (
                                    <div>
                                        <div>{
                                            attack.name
                                        }</div>
                                        <div>Range: {
                                            attack.range
                                        }</div>
                                        <div>Dice: {
                                            attack.dice.amount
                                        }D{
                                            attack.dice.type
                                        }
                                            + {
                                            attack.dice.modifier
                                        }</div>
                                        <button onClick={
                                            () => this.handleSpell(attack.dice, this.state.target)
                                        }>Roll</button>
                                    </div>
                                ))
                            } </div>
                        </div>
                    </div>
                </div> : <div></div>
            }
                <div>Roll Result: {
                    this.state.rollResult
                }</div>
                <div>Attack Roll Result: {
                    this.state.attackRollResult
                }</div>
            </div>
        )
    }
}

export default ActionModal;
