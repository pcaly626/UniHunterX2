import React, { Component, Fragment } from 'react';
import './CreateEncounter.css';
import Input from '../ui/Input';
import { createEncounter } from '../../actions/encounter';

interface IValues {
    [key: string] : any;
}

export interface IFormState {
    /* The field values */
    values: IValues;
  
    /* Whether the form has been successfully submitted */
    submitSuccess?: boolean;
  }

export  interface IFormProps {
    /* The http path that the form will be posted to */
    action: string;
  }

class CreateEncounter extends Component {
    
    state : any;

    constructor(props: any) {
        super(props);
        this.state = {
            createEncounterForm : {
                name : {
                    label:"Encounter Name",
                    placeHolder:"Example: Battle of Underbergstad",
                    value:"",
                    class:"",
                    type: "input",
                    change:  function(event: any) {},
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
                    change:  function(event: any) {},
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
                    change:  function(event: any) {},
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
                    change:  function(event: any) {},
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
    }

    private createEncounterChange(element : string, event : any){
        
        const updateForm : IFormState | any = {...this.state.createEncounterForm};
        let updateElement : any;
        for(let key in updateForm){
            if(key === element) updateElement = updateForm[key];
        }
       updateElement.value = event.target.value;
       updateForm[element] = updateElement;
       this.setState({createEncounterForm: updateForm});
        
    }

    private createEncounterHandler(event : React.FormEvent<HTMLFormElement>){
        const encounterState : any = {...this.state.createEncounterForm};
        let formData : any = {};
        console.log(encounterState);
       // for( let item of encounterState){
            //console.log(item);
        //}
        //createEncounter()
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

}


export default CreateEncounter;