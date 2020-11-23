import React, {Component, Fragment} from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import './App.css';
import CreateEncounter from './containers/CreateEncounter/CreateEncounter';
import EncounterPage from './containers/Encounter/EncounterPage';
import store from './store';

class App extends Component {

  render(){
    return (
      <div className="App">
      <Provider store={store}>
        <HashRouter>
            <Switch>
              <Route path='/' exact  component={CreateEncounter} />
              <Route path='/encounter' exact component={EncounterPage}/>
            </Switch>
        </HashRouter>
      </Provider>
      </div>
    );
  }
}
export default App;
