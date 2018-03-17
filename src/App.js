import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {SiteHeader} from './SiteHeader';
import {SeasonPrices} from './SeasonPrices';
import {News} from './News';
import {NamlaSchedule} from './NamlaSchedule';
import {Youth} from './Youth';
import './css/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SiteHeader/>
          <Router>
            <Switch>
              <Route exact path="/" component={News} />
              <Route exact path="/youth" component={Youth} />
              <Route path="/prices" component={SeasonPrices}/>
              <Route path="/youth/schedule" component={NamlaSchedule}/>
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
