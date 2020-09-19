import React, {Component, Fragment} from 'react';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import CreateEncounter from './components/encounter/CreateEncounter';
import Encounter from './components/encounter/Encounter';
class App extends Component {

  render(){
    return (
      <Router>
          <Switch>
            <Route path='/' component={CreateEncounter}/>
            <Route path='/encounter' component={Encounter}/>
          </Switch>
      </Router>
    );
  }
}
export default App;
