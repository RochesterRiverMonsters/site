import React from 'react';
import logo from './images/rrmbanner.png';
import './css/SiteHeader.css';

export class SiteHeader extends React.Component {
  render() {
    return(
          <div className="rrm-header">
            <img className="brand" alt="Rochester River Monsters" src={logo}/>
          </div>
    )
  }
}
