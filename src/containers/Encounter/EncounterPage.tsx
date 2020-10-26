import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadEncounter } from '../../actions/encounter';
import './Encounter.css';


class EncounterPage extends Component 
{

    state = {
        round: 1
    }

    render() {
        
        return (
            <div className="row">
                <div className="col-3">
                    <button onClick={() => {this.props.history.push("/")}}>Back</button>
                </div>
                <div className="col-2"></div>
                <div className="col-2">
                    <h1>Encounter Page</h1>
                    <h3>Round: {this.state.round}</h3>
                </div>
                <div className="col-2">
                    <button>Prev Turn</button>
                    <button> Turn</button>
                </div>
                <div className="col-3">
                    {Object.keys(this.props.encounter).map( key => ( <h1 key={key}>{this.props.encounter[key]}</h1>))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state : any) => ({
    encounter: state.encounterReducer.encounter
})

function mapDispatchToProps ( dispatch: Dispatch ) {
    return { dispatch, loadEncounter }
}

export default connect( mapStateToProps, mapDispatchToProps)(EncounterPage);