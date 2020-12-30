import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadEncounter } from '../../actions/encounter';
import { EncounterData } from '../../types/EncounterTypes';
import SideBar from '../../components/Encounter/SideBar/SideBar';
import Combatant from '../../components/Encounter/Combatant/Combatant';
import BackArrow from '../../assets/icons/back-arrow.svg';
import './Encounter.css';


class EncounterPage extends Component {

    state = {
        round: 1,
        currentCombatant: 0,
        players: [],
        enemies: [],
        queue: []
    }


    rollInitiative(){
        let queue = [...this.state.players, ...this.state.enemies];
        queue.forEach( item => { item.initiative = Math.floor(Math.random() * 20) + 1;  });
        queue.sort((a, b) => (a.initiative < b.initiative) ? 1 : -1 )
        this.setState({queue: queue})
    }

    render() {
        this.state.players = this.props.encounter.players
        this.state.enemies = this.props.encounter.enemies
        
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
                                    <div className="col-4 ">
                                        <div className="row">
                                            <div className="EncounterRound w-100">
                                                <h4>Round</h4>
                                            <h1>{ this.state.round }</h1>
                                            </div>
                                        </div>
                                    </div>
                                        
                                    <div className="col-4"></div>
                                </div>
                            </div>
                            <div className="col-4"></div>
                        </div>
                        <div className="row">
                                        {
                                            this.state.queue[this.state.currentCombatant] ? 
                                                <Combatant combatant={this.state.queue[this.state.currentCombatant]} />
                                                :
                                                <div></div>
                                        }
                                        </div>
                    </div>
                    <div className="col-3">
                        <div className="row">
                            {/* <button>Prev Turn</button>
                            <button>Turn</button> */}
                        </div>
                        <div className="row">
                            <button onClick={() => this.rollInitiative()}>Roll Initiative</button>
                        </div>
                        <div className="row">
                            {
                                this.props.encounter.enemies ? 
                                    <SideBar queue={this.state.queue} />
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
