import React, { Component, Fragment, ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import './CreateEncounter.css';
import Input from '../../components/UI/Input/Input'
import { createEncounter } from '../../actions/encounter';
import { CreateEncounterState } from '../Types/EncounterTypes'; 
import EncounterPage from '../Encounter/EncounterPage';
import { Link } from 'react-router-dom'; 
import EncounterForm from '../../components/EncounterForm/EncounterForm';

class CreateEncounter extends Component<{}, CreateEncounterState>{

    state : CreateEncounterState = {
            createEncounterForm : {
                name : {
                    label:"Encounter Name",
                    placeHolder:"Example: Battle of Underbergstad",
                    value:"",
                    css:"",
                    type: "input",
                    change:  (event: ChangeEvent) => {},
                    options: [
                        {
                            value:""
                        }
                    ]
                },
                player:{
                    label:"Choose a Player",
                    placeHolder:"Example: Rasgrim",
                    value:"",
                    css:"",
                    type: "select",
                    change:  (event: ChangeEvent) => {},
                    options: [
                        {
                            value:"Choose Player"
                        },
                        {
                            value:"Rasgrim"
                        },
                        {
                            value:"Moss"
                        },
                        {
                            value:"Oskar"
                        },
                        {
                            value:"Azrael"
                        },
                    ]
                },
                enemy:{
                    label:"Select an Enemy",
                    placeHolder:"Example: Goblins",
                    value:"",
                    css:"",
                    type: "select",
                    change:  (event: ChangeEvent) => {},
                    options: [
                        {
                            value:"Choose Enemy"
                        },
                        {
                            value:"Goblins"
                        },
                        {
                            value:"Orcs"
                        }
                    ]
                },
                terrain:{
                    label:"Choose a terrain",
                    placeHolder:"Example: Swamp",
                    value:"",
                    css:"",
                    type: "select",
                    change:  (event: ChangeEvent) =>{},
                    options: [
                        {
                            value:"Choose Terrain"
                        },
                        {
                            value:"Swamp"
                        },
                        
                        {
                            value:"Forest"
                        }
                    ]
                }

            },
            sendToEncounter: {}
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
        const { dispatch, createEncounter } = this.props;
        const encounterState : any = {...this.state.createEncounterForm};
        let formData : any = {};

        for( let item in encounterState){
            formData[item] = encounterState[item].value;
        }
        this.setState({sendToEncounter: formData})
        dispatch(createEncounter( formData ));
        this.props.history.push('encounter')
    }

    render(){
        
        return (
            <Fragment>
                <EncounterForm 
                    elements={this.state.createEncounterForm} 
                    handleSubmit={this.createEncounterHandler} 
                    handleChange={this.createEncounterChange}
                />
                
            </Fragment>
        )
    }

};

function mapDispatchToProps ( dispatch: Dispatch ) {
    return { dispatch, createEncounter }
}

export default connect( null, mapDispatchToProps)(CreateEncounter);