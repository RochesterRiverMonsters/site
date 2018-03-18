import React from 'react';
import {RRMContentBox} from './RRMContentBox';
import {LeftNav} from './LeftNav';
import './css/News.css';


export class Youth extends React.Component {
  render() {
    return(
      <div>
      <RRMContentBox
      displayLogo='true'
      header='Program'
      introText = 'This comes before the body!'
      body='Text goes here'
      bottomText='This is bottom text in bold'
      buttonLink="https://google.com"
      buttonText='Test'
      />
      <br />
      <RRMContentBox
      header='NAMLA Tryouts'
      body='Text goes here'
      />
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
