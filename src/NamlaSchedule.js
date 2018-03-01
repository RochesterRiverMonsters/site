import React from 'react';
import {Image} from 'react-bootstrap';
import logo from './images/rivermonsters-brand.png';
import './css/NamlaSchedule.css';


export class NamlaSchedule extends React.Component {
  render() {
    return(
      <div className="container">
          <div className="row">
            <h1 className="text-center rrm-news-header">Rochester River Monsters NAMLA Game Schedule</h1>
          </div>
          <div className="row">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Date</th><th>Time</th><th>Opponent</th><th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sat, May 5</td><td>11 AM</td><td>Newtown Golden Eagles</td><td><a target="rrm_arena_page" href="https://goo.gl/maps/kvx1gUHz7DT2">Gil Lay Memorial Arena</a></td>
                </tr>
                <tr>
                  <td>Sat, May 12</td><td>1 PM</td><td>Onondaga Redhawks</td><td><a target="rrm_arena_page" href="https://goo.gl/maps/y3pPoLZeTjD2">Bill Greys Regional Iceplex</a></td>
                </tr>
                <tr>
                  <td>Sat, May 19</td><td>12 PM</td><td>Newtown Golden Eagles</td><td><a target="rrm_arena_page" href="https://goo.gl/maps/y3pPoLZeTjD2">Bill Greys Regional Iceplex</a></td>
                </tr>
                <tr>
                  <td>Sun, May 20</td><td>11 AM</td><td>Allegany Arrows</td><td><a target="rrm_arena_page" href="https://goo.gl/maps/y3pPoLZeTjD2">Bill Greys Regional Iceplex</a></td>
                </tr>
                <tr>
                  <td>Sat, June 2</td><td>12 PM</td><td>Tuscarora Thunder</td><td><a target="rrm_arena_page" href="https://goo.gl/maps/y3pPoLZeTjD2">Bill Greys Regional Iceplex</a></td>
                </tr>
                <tr>
                  <td>Sun, June 3</td><td>10 AM</td><td>Tuscarora Thunder</td><td><a target="rrm_arena_page" href="https://goo.gl/maps/Wg9PgFyQpht">Tuscarora Lacrosse Park</a></td>
                </tr>
                <tr>
                  <td>Wed, June 6</td><td>6 PM</td><td>Tonawanda Braves</td><td><a target="rrm_arena_page" href="https://goo.gl/maps/3tx8FwFhfD42">Logan Field</a></td>
                </tr>
                <tr>
                  <td>Wed, June 13</td><td>6 PM</td><td>Champion Lacrosse</td><td><a target="rrm_arena_page" href="https://goo.gl/maps/y3pPoLZeTjD2">Bill Greys Regional Iceplex</a></td>
                </tr>
                <tr>
                  <td>Sun, June 17</td><td>10 AM</td><td>Onondaga Redhawks</td><td><a target="rrm_arena_page" href="https://goo.gl/maps/YVjLbCdtQsr">Tsha’hon’nonyen’dakhwa’</a></td>
                </tr>
                <tr>
                  <td>Tue, June 19</td><td>5:30 PM</td><td>Tonawanda Braves</td><td><a target="rrm_arena_page" href="https://goo.gl/maps/y3pPoLZeTjD2">Bill Greys Regional Iceplex</a></td>
                </tr>
                <tr>
                  <td>Sat, June 23</td><td>10 AM</td><td>Allegany Arrows</td><td><a target="rrm_arena_page" href="https://goo.gl/maps/e7wCwhDJ2J22">Allegany Community Center</a></td>
                </tr>
                <tr>
                  <td>Tue, June 26</td><td>6 PM</td><td>Champion Lacrosse</td><td><a target="rrm_arena_page" href="https://goo.gl/maps/TEHActpGKnM2">Buffalo River Works</a></td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    )
  }
}
