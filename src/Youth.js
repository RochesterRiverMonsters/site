import React from 'react';
import {RRMContentBox} from './RRMContentBox';
import {LeftNav} from './LeftNav';
import './css/News.css';

var navArray = {
                textArray : [ 'Program', 'NAMLA', 'Q&A'],
                linkArray : ['/youth#Program', '/youth#NAMLATryouts', '/youth#Q&A'],
                title : 'Youth'
              }


export class Youth extends React.Component {

  render() {
    return(
      <div>

      <LeftNav
        navArray={navArray}
      />

      <RRMContentBox
      header='Program'>
      Text goes here
      </RRMContentBox>

      <br />

      <RRMContentBox
      displayLogo='true'
      header='NAMLA Tryouts'
      introText='The Rochester River Monsters are proud to offer an elite youth box lacrosse program in the Rochester area!'
      bottomText='Sign up to reserve your spot now!'
      buttonLink='https://www.eventbrite.com/e/namla-rochester-river-monsters-youth-tryouts-tickets-41950976500'
      buttonText='Sign Up'>
      Starting this year the Rochester River Monsters will offering PeeWee, Bantam and Midget teams competing in the North
      American Minor Lacrosse Association (NAMLA). As part of this offering we will be playing games against top level talent from
      near-by competitors such as the Onondaga Redhawks, Tonawanda Braves, Allegany Arrows, Newtown Golden Eagles and more, just as
      our Mens team does. Tryouts for all three levels of this team will be Febrauary 23rd and practices will start in March.
      </RRMContentBox>

      <br />

      <RRMContentBox
      displayLogo='true'
      header='Q&A'
      body='Article'
      />

      </div>
    )
  }
}
