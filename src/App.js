import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {SiteHeader} from './SiteHeader';
import {SeasonPrices} from './SeasonPrices';
import {News} from './News';
import './css/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SiteHeader/>
          <Router>
            <Switch>
              <Route exact path="/" component={News} />
              <Route path="/pric*" component={SeasonPrices}/>
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
