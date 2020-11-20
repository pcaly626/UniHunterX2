import React from 'react';
import './QueueEntitiesSidebar.css';
import Minus from '../../assets/icons/minus.svg';
import Portait from '../../assets/portaits/rasgrim.png';
const queuedEntitiesSidebar = (props : any) => {
    console.log(props.queue)
    return (
        <div className="QueueEntitiesSidebar">
            {
                props.queue.players.map(player => (
                    <div className="row" key={player}>
                        <div className="Entity">
                            <div className="row">
                               
                                 <div className="QueueItem">
                                    <img className="Portait" src={Portait} /><p>{player}</p>
                                </div>
                                <img src={Minus} onClick={() => props.remove("player", player)}/>
                            </div>
                        </div>
                        </div>
                ))
            }
            {
                props.queue.enemys.map(enemy => (
                    <div className="row" key={enemy}>
                        <div className="Entity">
                            <div className="row">
                                <p>{enemy}</p>
                                <img src={Minus} onClick={() => props.remove("enemy", enemy)}/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default queuedEntitiesSidebar;