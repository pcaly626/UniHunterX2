import React from 'react';
import './QueueEntitiesSidebar.css';

const queuedEntitiesSidebar = (props) => {
    console.log(props.queue)
    return (
        <div className="QueueEntitiesSidebar">
            {
                props.queue.players.map(player => (
                    <div className="row" key={player}>
                        <div className="Entity">
                            {player}
                        </div>
                        </div>
                ))
            }
            {
                props.queue.enemys.map(enemy => (
                    <div className="row" key={enemy}>
                        <div className="Entity">
                            {enemy}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default queuedEntitiesSidebar;