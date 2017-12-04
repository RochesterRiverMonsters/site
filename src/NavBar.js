import React from 'react';
import logo from './rivermonsters-brand.png';

export class NavBar extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div className="navbar-collapse rrm-nav-align" id="rrm-navbar-youth">
            <ul className="nav navbar-nav">
              <li><a role="navigation" className="nav-desc" href="#">YOUTH</a></li>
            </ul>
            <ul className="nav navbar-nav">
              <li><a role="navigation" className="navbar-brand" href="#"><img alt="Rochester River Monsters" src={logo}/></a></li>
            </ul>
            <ul className="nav navbar-nav">
              <li><a role="navigation" className="nav-desc" href="#">ADULT</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
