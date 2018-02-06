import React from 'react';
import {Image} from 'react-bootstrap';
import logo from './images/rivermonsters-brand.png';
import './css/SeasonPrices.css';
import './css/News.css';


export class SeasonPrices extends React.Component {
  render() {
    return(
      <div className="container rrm-news-slate">
          <div className="row">
            <h1 className="text-center rrm-news-header">Rochester River Monsters NAMLA Prices</h1>
          </div>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="row rrm-news-article">
                <div className="row">
                  <b>Base Roster Price: $695.00</b>
                  <br />
                  <i>Includes, but not limited to</i>
                  <ul>
                    <li>Personalized Jersey and shorts (both home and away)</li>
                    <li>12 Game Season</li>
                    <li>All NAMLA Fees</li>
                    <li>Weekly Practice at an indoor box facility (March - June)</li>
                    <li>Playoff Costs</li>
                    <li>All Coaching fees</li>
                    <li>Special Pricing on Team Gear</li>
                  </ul>
                </div>
                <div className="row">
                  <b>Optional Customized Equipment: $275.00</b>
                  <br />
                  <i>Includes</i>
                  <ul>
                    <li>Personalized Custom Warrior Rochester River Monsters Gloves</li>
                    <li>Warrior Personalized Fat Boy Helmet White</li>
                  </ul>
                </div>
                <div className="row">
                  <b>Practice Only Price: $495.00</b>
                  <br />
                  <i>Includes, but not limited to</i>
                  <ul>
                    <li>Weekly Practice at an indoor box lacrosse facility (March - June)</li>
                    <li>All Coaching fees</li>
                    <li>Special Pricing on Team Gear</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
