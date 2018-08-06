import React from 'react';
import SideNav, {Nav, NavIcon, NavText} from 'react-sidenav';
import { BrowserView, MobileView} from "react-device-detect";
import './css/LeftNav.css';

const BaseContainer = props =>
    <div className="left-nav-box"
        style={{
            ...props.style
        }}
    >
        {props.children}
    </div>;



export class LeftNav extends React.Component{

  makeNav(navObj, view){
    var myNavArray = [];
    for(var i = 0; i < navObj.linkArray.length; i++){
      if(view === "BrowserView"){
        myNavArray.push(<Nav><NavText><a href={navObj.linkArray[i]}>{navObj.textArray[i]}</a></NavText></Nav>)
      }
      else if(view === "MobileView"){
        myNavArray.push(<h3 className="text-center"><a href={navObj.linkArray[i]}>{navObj.textArray[i]}</a></h3>)
      }
    }
    return (myNavArray);
  }

  render() {
        return (
          <div>
            <BrowserView>
              <BaseContainer style={{position: 'fixed', top: 0}}>
                <SideNav highlightBgColor="#eee">
                  <h1 className="text-center left-nav-header">{this.props.navArray.title}</h1>
                  <div className="text-left">
                    <Nav>
                      <NavText><a href="/">Home</a></NavText>
                    </Nav>
                    {this.makeNav(this.props.navArray, "BrowserView")}
                  </div>
                </SideNav>
              </BaseContainer>
            </BrowserView>
            <MobileView>
              <div className="container left-nav-slate">
                  <div className="row">
                    <h1 className="text-center left-nav-header">{this.props.navArray.title}</h1>
                  </div>
                  {this.makeNav(this.props.navArray, "MobileView")}
                </div>
                <br />
            </MobileView>
          </div>
        )
      }
    }
