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
    
    handleSpell(spell : any, modifiers : any, atkBonus : any, spellSave : any, spellSlots : any, target : any) {
        let spellType = spell.type;
        if (spellType == "heal"){
            let a = 1;
        }
        else if (spellType == "help"){
            let a = 0;
        }
        else if (spellType == "attack"){
            let total = 0;
            let hit = false;
            if (spell.attackroll){
                let attackRoll = Math.floor(Math.random() * 20) + atkBonus;
                this.setState({attackRollResult: attackRoll})
                if (attackRoll >= target.armorClass){
                    hit = true;
                }
            }
            else{
                let saveModifier = Math.floor((target().modifiers.dex - 10) / 2); // will not always be dex, can find save type in spell. need a switch case helper method to determine which modifier to use
                let saveRoll = Math.floor(Math.random() * 20) + saveModifier;
                this.setState({saveRollResult: saveRoll})
                if (saveRoll >= spellSave){
                    hit = true;
                }
            }
            if (hit){
                // play sound of bash, explosion, splash, etc.
                // this is duplicate code. Any strike can be treated the same way (subtract dice roll from hp)
                let dice = spell.dice;
                for (let roll = 0; roll < dice.amount; roll++) {
                    total += Math.floor(Math.random() * dice.type) + 1;
                }
                total += dice.modifier;
                this.setState({rollResult: total})
                this.state.target.health -= total;
            }
            else{
                //report roll result? 
                // play sound of swish 
                //say "miss" or something
                this.setState({rollResult: total})
            }
        }
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
                                            () => this.handleSpell(this.spell, this.props.combatant.modifiers, this.props.combatant.spellAttackBonus, this.props.combatant.spellSaveDC, this.props.combatant.slots, this.state.target) // pass in "spell" object
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
