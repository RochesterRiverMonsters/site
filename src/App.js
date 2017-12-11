import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {SiteHeader} from './SiteHeader';
import {News} from './News';
import {Catalog} from './catalog';
import './css/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SiteHeader/>
          <Router>
            <Switch>
              <Route exact path="/" component={News} />
              <Route exact path="/news/youth-team-signup" component={News} />
              <Route exact path="/signup/youth-team" component={Catalog} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
