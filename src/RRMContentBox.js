import React from 'react';
import './css/RRMContentBox.css';

export class RRMContentBox extends React.Component{
  render(){
    return(
      <div className="container rrm-content-box-slate">
          <div className="row">
            <h1 className="text-left rrm-content-box-header">{this.props.header}</h1>
          </div>
              <div className="row rrm-content-box-article">{this.props.body}</div>
            </div>
    )
  }
}
