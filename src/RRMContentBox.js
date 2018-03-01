import React from 'react';
import {Image} from 'react-bootstrap';
import logo from './images/rivermonsters-brand.png';
import './css/RRMContentBox.css';

/**
 * Provides functionality to allow for a generic content item on the RRM site.
 * Input looks like this:
 <RRMContentBox>
   <title>NAMLA Tryouts</title>
   <altHeader>Alternate heading</altHeader>
   <content>The Rochester River Monsters...</content>
 </RRMContentBox>
 */
export class RRMContentBox extends React.Component {
  render() {
    return(
      <div className="container rrm-news-slate">
          <div className="row">
            <h1 className="text-center rrm-news-header">{props.title}</h1>
          </div>
          <div className="row">
            <div className="col-sm-3"><Image className="rrm-news-headline-image" rounded={true} src={logo} alt="Rochester River Monsters"/></div>
            <div className="col-sm-9">
              <div className="row rrm-box-alt-header">{props.altHeader}</div>
              <div className="row rrm-box-content">{props.content}</div>
            </div>
          </div>
      </div>

    )
  }
}
