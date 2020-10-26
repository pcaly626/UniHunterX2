import React, {Component, Fragment} from 'react';
import { HashRouter, IndexRoute, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import './App.css';
import CreateEncounter from './components/encounter/CreateEncounter';
import EncounterPage from './components/encounter/EncounterPage';
import store from './store';

class App extends Component {

  render(){
    return (
      <Provider store={store}>
        <HashRouter>
            <Switch>
              <Route path='/' exact  component={CreateEncounter} />
              <Route path='/encounter' exact component={EncounterPage}/>
            </Switch>
        </HashRouter>
      </Provider>
    );
  }
}
export default App;
