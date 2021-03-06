import React, { Component, Fragment, ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import './CreateEncounter.css';
import Input from '../../components/UI/Input/Input'
import { createEncounter } from '../../actions/encounter';
import { CreateEncounterState, Player, EncounterData } from '../../types/EncounterTypes'; 
import EncounterPage from '../Encounter/Encounter';
import { Link } from 'react-router-dom'; 
import EncounterForm from '../../components/EncounterForm/EncounterForm';
import QueueEntitiesSidebar from '../../components/QueueEntitiesSidebar/QueueEntitiesSidebar';

class CreateEncounter extends Component<{}, CreateEncounterState>{

    state : CreateEncounterState = {
            createEncounterForm : {
                name : {
                    label:"Encounter Name",
                    placeHolder:"Example: Battle of Underbergstad",
                    value:"",
                    css:"textInput",
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
                            value:"Goblin"
                        },
                        {
                            value:"Orc"
                        }
                    ]
                },
                terrain:{
                    label:"Choose a Terrain",
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
            queue: {
                players: [],
                enemies: []
            }
        }
    
    createEncounterChange = (element : string, event : ChangeEvent) =>{
        const updateForm : any = {...this.state.createEncounterForm};
        let updateElement : any;
        for(let key in updateForm){
            if(key === element) updateElement = updateForm[key];
        }
        updateElement.value = event.target.value;
        updateForm[element] = updateElement;
        this.setState({createEncounterForm: updateForm});
    }

    createEncounterHandler = (event : ChangeEvent) =>{
        event.preventDefault();
        const { dispatch, createEncounter } = this.props;
        const encounterState = {...this.state.createEncounterForm};
        const queue = {...this.state.queue};
        let formData = {
            name: encounterState.name.value,
            terran: encounterState.terrain.value,
            players: queue.players,
            enemies: queue.enemies,
        };

        this.setState({queue: formData})
        this.props.history.push(dispatch(createEncounter( formData )));
    }

    addPlayerOrEnemy = (type: string) => {
        let allSelectedEntities = {...this.state.queue};
        let players = new Set(allSelectedEntities.players);
        let enemies = [...allSelectedEntities.enemies];
        if( type == "player" ){
            players.add( this.state.createEncounterForm.player.value );
        }
        if( type == "enemy" ){
            enemies.push( this.state.createEncounterForm.enemy.value )
        }
        
        allSelectedEntities.players = [...players];
        allSelectedEntities.enemies = [...enemies];
        this.setState({queue: allSelectedEntities});
    }

    removePlayerOrEnemy = (type: string, value: string) => {
        let allSelectedEntities = {...this.state.queue};
        if( type == "player" ){
            allSelectedEntities.players = allSelectedEntities.players.filter( player => {return player != value} );
        }
        if( type == "enemy" ){
            let tempEnemies = [];
            let foundEnemy = false;

            for( let index = 0; index < allSelectedEntities.enemies.length; index++)
            {
                if(value == allSelectedEntities.enemies[index] && !foundEnemy){
                    foundEnemy = true;
                }
                else{
                    tempEnemies.push(allSelectedEntities.enemies[index])
                }
            }
            allSelectedEntities.enemies = tempEnemies;
        }

        this.setState({queue: allSelectedEntities});
    }

    render(){
        
        return (
        <div className="CreateEncounter">
            <div className="container">
                <div className="row">
                    <h1>Let the Combat Begin</h1>
                </div>
                <div className="row">
                    <div className="col-6">
                        <EncounterForm 
                            elements={this.state.createEncounterForm} 
                            handleSubmit={this.createEncounterHandler} 
                            handleChange={this.createEncounterChange}
                            add={this.addPlayerOrEnemy}
                            
                        />
                    </div>
                    <div className="col-3"></div>
                    <div className="col-3">
                        <QueueEntitiesSidebar
                            queue={this.state.queue}
                            remove={this.removePlayerOrEnemy}
                        />
                    </div>
                </div>
            </div>
        </div>
        )
    }

};

function mapDispatchToProps ( dispatch: Dispatch ) {
    return { dispatch, createEncounter }
}

export default connect( null, mapDispatchToProps)(CreateEncounter);