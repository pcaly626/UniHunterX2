import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router';
import logo from './logo.svg';
import './App.css';
import CreateEncounter from './components/encounter/CreateEncounter';
import Encounter from './components/encounter/Encounter';

class App extends Component {

  render(){
    return (
      <Switch>
        <Route path='/' component={CreateEncounter}/>
        <Route path='/encounter' component={Encounter}/>
      </Switch>
    );
  }
}
export default App;
