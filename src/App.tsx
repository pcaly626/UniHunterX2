import React, {Component, Fragment} from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import './App.css';
import CreateEncounter from './components/encounter/CreateEncounter';
import EncounterPage from './components/encounter/EncounterPage';
import store from './store';

class App extends Component {

  render(){
    return (
      <Provider store={store}>
        <Router>
            <Switch>
              <Route path='/' component={CreateEncounter} />
              <Route path='/encounter' component={EncounterPage}/>
            </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;
