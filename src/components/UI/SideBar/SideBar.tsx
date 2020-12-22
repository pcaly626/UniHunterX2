import React from 'react';
import './SideBar.css';
import {SideBarProps} from '../../../types/SideBarTypes';

const sidebar = (props : SideBarProps) => {
    return (
        <div className="SideBar">
            {
            props.enemies.map((enemy, index) => (
                <div key={index}
                    className="row">
                    <div className="Entity">
                            <div className="QueueItem">
                                <img className="Portait"
                                    src=""/><p>{
                                    enemy.name
                                }</p>
                        </div>
                    </div>
                </div>
            ))
        }
            {
            props.players.map((player, index) => (
                <div key={index}
                    className="row">
                    <div className="Entity">
                            <div className="QueueItem">
                                <img className="Portait"
                                    src=""/><p>{
                                    player.name
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
