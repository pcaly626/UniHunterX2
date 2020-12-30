import React from 'react';
import './SideBar.css';
import {SideBarProps} from '../../../types/SideBarTypes';
import Portait from '../../../assets/portaits/rasgrim.png';
const sidebar = (props : SideBarProps) => {
    return (
        <div className="SideBar">
            {
            /* Character bar in sidebar - this turn */
            props.queue.getQueue().map((combatant, index) => (
                <div key={index} className="row">
                    {index == 0 ?
                    <div className="Entity">
                        <div className="SideBarItem">
                            <div className="container">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="row">
                                            <img className="Portait"src={Portait}/>
                                            <p>{ combatant.name }</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <p>{ combatant.health }</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <button>action</button>
                                    <button>hold</button>
                                </div>
                                <div className="row">
                                    <button>bonus</button>
                                    <button>free</button>
                                </div>
                            </div>
                        </div>
                    </div>
                : 
                /* Character bar in sidebar - not this turn */
                <div className="Entity">
                    <div className="SideBarItem">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">
                                    <div className="row">
                                        <img className="Portait"src={Portait}/>
                                        <p>{ combatant.name }</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <p>{ combatant.health }</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <button>reaction</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            </div>
            ))}
        </div>
    );
}

export default sidebar;
