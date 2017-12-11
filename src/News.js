import React from 'react';
import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import john from './images/heygoalie.jpg';
import './css/News.css';


export class News extends React.Component {
  handleOpenOrderForm() {
  }

  render() {
    return(
      <div className="container rrm-news-slate">
          <div className="row">
            <h1 className="text-center rrm-news-header">New Youth Program</h1>
          </div>
          <div className="row">
            <div className="col-sm-3"><Image className="rrm-news-headline-image" rounded={true} src={john} alt="Hey goalie!"/></div>
            <div className="col-sm-9">
              <div className="row rrm-news-alt-header">The Rochester River Monsters are proud to offer an elite youth box lacrosse program in the Rochester area!</div>
              <div className="row rrm-news-article"> Starting this year the Rochester River Monsters will offering PeeWee, Bantam and Midget teams competing in the North American
               Minor Lacrosse Association (NAMLA). As part of this offering we will be playing games against top level talent from near-by competitors such as the Onondaga Redhawks,
               Tonawanda Braves, Allegany Arrows, Newtown Golden Eagles and more, just as our Mens team does. Tryouts for all three levels of this team will be January 26th and 27th
               and practices will start in Febrauary. The tryout cost is $40 and will include a free River Monsters shooter shirt.</div>
              <div className="row rrm-news-nav">Sign up to reserve your spot now!</div>
              <div className="row rrm-news-nav"><Link to="/signup/youth-team" className="btn btn-default">Sign Up</Link></div>
            </div>
          </div>
      </div>
    )
  }
}
