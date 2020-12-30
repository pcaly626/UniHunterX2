import React from 'react';
import './SideBar.css';
import {SideBarProps} from '../../../types/SideBarTypes';

const sidebar = (props : SideBarProps) => {
    return (
        <div className="SideBar">
            {
            props.queue.map((combatant, index) => (
                <div key={index}
                    className="row">
                    <div className="Entity">
                            <div className="QueueItem">
                                <img className="Portait"
                                    src=""/><p>{
                                    combatant.name
                                }</p>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    );
}

export default sidebar;
