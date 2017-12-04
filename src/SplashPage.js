import React from 'react';
import logo from './rivermonsters.png';


export class SplashPage extends React.Component {
    render() {
        return (
                <div className="site-wrapper">
                  <div className="splash-page">
                    <div className="row justify-content-md-center">
                      <div className="col-md-auto">
                        <img alt="Rochester River Monsters Logo" className="img-fluid splash-image" src={logo}/>
                      </div>
                      <div className="row justify-content-md-center">
                        <div className="splash-name-title">2018 Rochester River Monsters</div>
                      </div>
                    </div>
                    <div className="row justify-content-md-center">
                      <div className="splash-tagline">#ThisIsOurTime</div>
                    </div>
                  </div>
                </div>
        );
    }
}
