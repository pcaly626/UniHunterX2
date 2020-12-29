import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadEncounter } from '../../actions/encounter';
import { EncounterData } from '../../types/EncounterTypes';
import SideBar from '../../components/UI/SideBar/SideBar';
import BackArrow from '../../assets/icons/back-arrow.svg';
import './Encounter.css';


class EncounterPage extends Component {

    state = {
        round: 1,
        players: [],
        enemies: [],
        queue: []
    }

    rollInitiative(encounter){
        console.log(encounter.players)
        for(let i=0;i<encounter.players.length;i++){
            let roll = Math.floor(Math.random() * (1-20) + 1) + encounter.players.initiativeMod
            console.log(roll)
            this.state.queue.push(
                {initiative: roll,
                combatant: encounter.player[i]}
            )
        }
        console.log(this.state.queue)
    }

    render() {
        return (
            <div className="EncounterPage">
                <div className="row">
                    <div className="col-1 EncounterBackArrow">
                            <img onClick={
                            () => {
                                this.props.history.push("/")
                            }
                        } src={BackArrow} />
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-4">
                                <h1 className="EncounterTitle"> {this.props.encounter.name}</h1>
                                <div className="row">
                                    <div className="col-4"></div>
                                    <div className="col-4 EncounterRound">
                                        <h4>Round</h4>
                                        <h1>{ this.state.round }</h1>
                                    </div>
                                    <div className="col-4"></div>
                                </div>
                            </div>
                            <div className="col-4"></div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <button id="bigbutton" onClick={() => this.rollInitiative(this.props.encounter)}>Roll Initiative</button>
                        </div>
                        <div className="row">
                            <button>Prev Turn</button>
                            <button>Next Turn</button>
                        </div>
                        <div className="row">
                            {
                                this.props.encounter.enemies ? 
                                    <SideBar enemies={this.props.encounter.enemies} players={this.props.encounter.players}/>
                                    :
                                    <div></div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state : any) => ({encounter: state.encounterReducer.encounter})

function mapDispatchToProps(dispatch : Dispatch) {
    return {dispatch, loadEncounter}
}

export default connect(mapStateToProps, null)(EncounterPage);
