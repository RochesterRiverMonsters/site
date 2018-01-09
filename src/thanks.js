import React from 'react';
import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './css/thanks.css';


export class ThankYou extends React.Component {
  render() {
    return(
      <div className="container rrm-news-slate">
          <div className="row">
            <h1 className="text-center rrm-news-header">Thank You</h1>
          </div>
          <div className="row">
          Thank you for signing up to tryout for our team.
          </div>
      </div>
    )
  }
}
