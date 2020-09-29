import React, { Component, Fragment, ChangeEvent, Dispatch } from 'react';
import { connect } from 'react-redux';
import './CreateEncounter.css';
import Input from '../ui/Input';
import { createEncounter } from '../../actions/encounter';
import { CreateEncounterState } from './EncounterTypes'; 

class CreateEncounter extends Component<{}, CreateEncounterState>{

    state : CreateEncounterState = {
            createEncounterForm : {
                name : {
                    label:"Encounter Name",
                    placeHolder:"Example: Battle of Underbergstad",
                    value:"",
                    class:"",
                    type: "input",
                    change:  (event: ChangeEvent) => {},
                    options: [
                        {
                            value:"",
                            class:"",
                        }
                    ]
                },
                player:{
                    label:"Choose a Player",
                    placeHolder:"Example: Rasgrim",
                    value:"",
                    class:"",
                    type: "select",
                    change:  (event: ChangeEvent) => {},
                    options: [
                        {
                            value:"Choose Player",
                            class:"",
                        },
                        {
                            value:"Rasgrim",
                            class:"",
                        },
                        {
                            value:"Moss",
                            class:"",
                        },
                        {
                            value:"Oskar",
                            class:"",
                        },
                        {
                            value:"Azrael",
                            class:"",
                        },
                    ]
                },
                enemy:{
                    label:"Select an Enemy",
                    placeHolder:"Example: Goblins",
                    value:"",
                    class:"",
                    type: "select",
                    change:  (event: ChangeEvent) => {},
                    options: [
                        {
                            value:"Choose Enemy",
                            class:"",
                        },
                        {
                            value:"Goblins",
                            class:"",
                        },
                        {
                            value:"Orcs",
                            class:"",
                        }
                    ]
                },
                terrain:{
                    label:"Choose a terrain",
                    placeHolder:"Example: Swamp",
                    value:"",
                    class:"",
                    type: "select",
                    change:  (event: ChangeEvent) =>{},
                    options: [
                        {
                            value:"Choose Terrain",
                            class:"",
                        },
                        {
                            value:"Swamp",
                            class:"",
                        },
                        
                        {
                            value:"Forest",
                            class:"",
                        }
                    ]
                }

            },
        }


    private createEncounterChange = (element : string, event : ChangeEvent) =>{
        
        const updateForm : any = {...this.state.createEncounterForm};
        let updateElement : any;
        for(let key in updateForm){
            if(key === element) updateElement = updateForm[key];
        }
       updateElement.value = event.target.value;
       updateForm[element] = updateElement;
       this.setState({createEncounterForm: updateForm});
        
    }

    private createEncounterHandler = (event : ChangeEvent) =>{
        event.preventDefault();
        const encounterState : any = {...this.state.createEncounterForm};
        let formData : any = {};

        for( let item in encounterState){
            formData[item] = encounterState[item].value;
        }
        console.log(formData);
        this.props.createEncounter( formData );
        console.log("Back in create encounter");
        console.log(this.props.history.location);
        this.props.history.push('/encounter');
    }

    render(){

        {this.state.createEncounterForm.name.change = (event: any) => this.createEncounterChange('name', event)}
        {this.state.createEncounterForm.player.change = (event: any) => this.createEncounterChange('player', event)}
        {this.state.createEncounterForm.enemy.change = (event: any) => this.createEncounterChange('enemy', event)}
        {this.state.createEncounterForm.terrain.change = (event: any) => this.createEncounterChange('terrain', event)}
        const form = (
            <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => this.createEncounterHandler(event)}>
               <Input {...this.state.createEncounterForm.name} />
               <Input {...this.state.createEncounterForm.player} />
               <Input {...this.state.createEncounterForm.enemy} />
               <Input {...this.state.createEncounterForm.terrain} />
                
                <button type="submit">Submit</button>   
            </form>

        )
        return (
            <Fragment>
                {form}
            </Fragment>
        )
    }

};


export default connect( null, {createEncounter})(CreateEncounter);