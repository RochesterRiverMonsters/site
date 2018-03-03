import React from 'react';
import {Image} from 'react-bootstrap';
import logo from './images/rivermonsters-brand.png';
import './css/News.css';


export class News extends React.Component {
  render() {
    return(
      <div className="container rrm-news-slate">
          <div className="row">
            <h1 className="text-center rrm-news-header">NAMLA Tryouts</h1>
          </div>
          <div className="row">
            <div className="col-sm-3"><Image className="rrm-news-headline-image" rounded={true} src={logo} alt="Rochester River Monsters"/></div>
            <div className="col-sm-9">
              <div className="row rrm-news-alt-header">The Rochester River Monsters are proud to offer an elite youth box lacrosse program in the Rochester area!</div>
              <div className="row rrm-news-article"> Starting this year the Rochester River Monsters will offering PeeWee, Bantam and Midget teams competing in the North American
               Minor Lacrosse Association (NAMLA). As part of this offering we will be playing games against top level talent from near-by competitors such as the Onondaga Redhawks,
               Tonawanda Braves, Allegany Arrows, Newtown Golden Eagles and more, just as our Mens team does. Tryouts for all three levels of this team will be Febrauary 23rd
               and practices will start in March.</div>
              <div className="row rrm-news-nav">Sign up to reserve your spot now!</div>
              <div className="row rrm-news-nav"><a href="https://www.eventbrite.com/e/namla-rochester-river-monsters-youth-tryouts-makeup-tryouts-tickets-43571427312" className="btn btn-default">Sign Up</a></div>
            </div>
          </div>
      </div>
    )
  }
}
