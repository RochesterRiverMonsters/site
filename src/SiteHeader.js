import React from 'react';
import logo from './images/rrmbanner.png';
import './css/SiteHeader.css';

export class SiteHeader extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className="rrm-header">
          <img className="brand" alt="Rochester River Monsters" src={logo}/>
        </div>
        <div className="rrm-menu-bar">
          <div className="rrm-menu-items"><a target="_blank" href="https://www.eventbrite.com/e/namla-rochester-river-monsters-youth-tryouts-tickets-41950976500">Sign Up</a><a target="_blank" href="https://www.warrior.com/on/demandware.store/Sites-warrior_us-Site/default/Team-MemberOrder?orderId=52203">Store</a><a target="_blank" href="https://www.warrior.com/on/demandware.store/Sites-warrior_us-Site/default/Team-MemberOrder?orderId=52205">Equipment</a></div>
          <div className="rrm-menu-desc">code: ROCH2018</div>
        </div>
      </React.Fragment>
    )
  }
}
