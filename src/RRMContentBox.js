import React from 'react';
import {Image} from 'react-bootstrap';
import logo from './images/rivermonsters-brand.png';
import './css/RRMContentBox.css';

export class RRMContentBox extends React.Component{
  render(){
    const displayLogo = this.props.displayLogo;
    const displayButton = this.props.buttonLink;
    const id = this.props.header.replace(/ +/g, "");;
    return(
      <div className="container rrm-content-box-slate">
          <div className="row">
            <h1 className="text-left rrm-content-box-header" id={id}>{this.props.header}</h1>
          </div>
            <div className="row">
          {displayLogo && <div className="col-sm-3"><Image className="rrm-content-box-headline-image" rounded={true} src={logo} alt="Rochester River Monsters"/></div>}
          <div className="col-sm-9">
          <div className="row rrm-content-box-intro-text">{this.props.introText}</div>
              <div className="row rrm-content-box-article">{this.props.body}</div>
              <div className="row rrm-content-box-bottom">{this.props.bottomText}</div>
              {displayButton && <div className="row rrm-content-box-bottom"><a href={this.props.buttonLink} className="btn btn-default">{this.props.buttonText}</a></div>}
            </div>
          </div>
        </div>
    )
  }
}
