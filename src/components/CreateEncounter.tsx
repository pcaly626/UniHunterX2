import React, { Component, Fragment } from 'react';

import Input from './ui/Input';

class CreateEncounter extends Component {

    state = {
        createEncounterForm : {
            name : {
                label:"Encounter Name",
                placeHolder:"Example: Battle of Underbergstad",
                value:"",
                class:"",
                type: "input",
                options: [
                    {
                        value:"",
                        class:"",
                    }
                ]
            },
            player:{
                label:"Encounter Name",
                placeHolder:"Example: Battle of Underbergstad",
                value:"",
                class:"",
                type: "select",
                options: [
                    {
                        value:"",
                        class:"",
                    }
                ]
            },
            enemy:{
                label:"Encounter Name",
                placeHolder:"Example: Battle of Underbergstad",
                value:"",
                class:"",
                type: "select",
                options: [
                    {
                        value:"",
                        class:"",
                    }
                ]
            },
            terrian:{
                label:"Encounter Name",
                placeHolder:"Example: Battle of Underbergstad",
                value:"",
                class:"",
                type: "select",
                options: [
                    {
                        value:"",
                        class:"",
                    }
                ]
            }

        },
    }

    render(){
        const form = (
            <form>
                <Input {...this.state.createEncounterForm.name} />    
            </form>
        )
        return (
            <Fragment>
                {form}
            </Fragment>
        )
    }

}

export default CreateEncounter;