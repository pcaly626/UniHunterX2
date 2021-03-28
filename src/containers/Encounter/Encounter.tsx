import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadEncounter } from '../../actions/encounter';
import { EncounterData, Enemy, Player } from '../../types/EncounterTypes';
import SideBar from '../../components/Encounter/SideBar/SideBar';
import ActionModal from '../../components/Encounter/ActionModal/ActionModal';
import BackDrop from '../../components/UI/BackDrop/BackDrop';
import BackArrow from '../../assets/icons/back-arrow.svg';
import Queue from '../../utilities/queue/Queue';
import EncounterMap from '../../components/Encounter/EncounterMap/EncounterMap';

import './Encounter.css';


class Encounter extends Component {

    state = {
        round: 1,
        turn: 1,
        currentCombatant: 0,
        players: [],
        enemies: [],
        queue: new Queue(),
        openModal: false
    }

    openActionModal() {
        let showOrHide = !this.state.openModal;
        this.setState({openModal: showOrHide})
    }

    rollInitiative(){
        let queue = [...this.state.players, ...this.state.enemies];
        let newQueue = new Queue();
        queue.forEach( item => { item.initiative = Math.floor(Math.random() * 20) + 1;  });
        queue.sort((a, b) => (a.initiative < b.initiative) ? 1 : -1 );
        queue.map( item => newQueue.enqueue(item))
        this.setState({queue: newQueue})
    }

    nextRound() {
        let updateRound = this.state.round;
        let updateTurn = this.state.turn + 1;
        let updateQueue  = this.state.queue;
        updateQueue.cycleForward();
        updateRound = updateTurn / this.state.queue.length();
        this.setState({turn: updateTurn})
        this.setState({round: updateRound.toFixed(0)})
    }

    prevRound() {
        
        if(this.state.round > 1){
            let updateTurn = Math.max(this.state.turn - 1, 1);
            let updateRound = Math.max(updateTurn / this.state.queue.length(), 1);
            let updateQueue  = this.state.queue;
            updateQueue.cycleBack();
            this.setState({turn: updateTurn})
            this.setState({round: updateRound.toFixed(0)})
        }
    }

    render() {
        this.state.players = this.props.encounter.players
        this.state.enemies = this.props.encounter.enemies

        return (
                <div className="EncounterPage">
                    <ActionModal 
                        show={this.state.openModal} 
                        hide={() => this.openActionModal()} 
                        combatant={this.state.queue.peek()} 
                        combatants={this.state.queue.getQueue()} 
                    />
                    <BackDrop open={this.state.openModal} />
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
                                <EncounterMap />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="row">
                                <button id="bigbutton" onClick={() => this.rollInitiative()}>Roll Initiative</button>
                            </div>
                            <div className="row">
                                <button onClick={() => this.prevRound()}>Prev Turn</button>
                                <button onClick={() => this.nextRound()}>Next Turn</button>
                            </div>
                            <div className="row">
                                {
                                    this.props.encounter.enemies ?
                                        <SideBar queue={this.state.queue} openModal={() => this.openActionModal()} open={this.state.openModal}/>
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

export default connect(mapStateToProps, null)(Encounter);
