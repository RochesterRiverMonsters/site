import React from 'react';
import BaseClass from './framework';
import logo from './images/rrmbanner.png';
import './css/NavBar.css';

export class NavBar extends BaseClass {
  render() {
    return(
          <div className="rrm-banner">
            <a className="brand" href="#"><img alt="Rochester River Monsters" src={logo}/></a>
          </div>
    )
  }
}
