import React from 'react';
import {RRMContentBox} from './RRMContentBox';
import './css/News.css';


export class Youth extends React.Component {
  render() {
    return(
      <div>
      <RRMContentBox
      header='Program' body='Text goes here'
      />
      <br />
      <RRMContentBox
      header='NAMLA Tryouts'
      body='Text goes here'
      />
      <br />
      <RRMContentBox
      header='Q&A'
      body='Text goes here'
      />
      </div>
    )
  }
}
