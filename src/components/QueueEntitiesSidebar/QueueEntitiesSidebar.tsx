import React, { Component } from 'react';
import './QueueEntitiesSidebar.css';
import Minus from '../../assets/icons/minus.svg';
import Portait from '../../assets/portaits/rasgrim.png';
class QueuedEntitiesSidebar extends Component {

    updateMargins = () => {
        
    }

    render() {
        return (
                <div className="QueueEntitiesSidebar" onChange={this.updateMargins}>
                    {
                        this.props.queue.players.map( ( player, index ) => (
                            <div key={`${player.name}-${index}`} className="row" >
                                <div className="Entity">
                                    <div className="row">
                                    
                                        <div className="QueueItem">
                                            <img className="Portait" src={Portait} /><p>{player}</p>
                                        </div>
                                        <img src={Minus} onClick={() => this.props.remove("player", player)}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {
                        this.props.queue.enemies.map(( enemy, index ) => (
                            <div key={`${enemy.name}-${index}`} className="row" >
                                <div className="Entity">
                                    <div className="row">
                                    
                                        <div className="QueueItem">
                                            <img className="Portait" src={Portait} /><p>{enemy}</p>
                                        </div>
                                        <img src={Minus} onClick={() => this.props.remove("enemy", enemy)}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
        );
    }
}

export default QueuedEntitiesSidebar;