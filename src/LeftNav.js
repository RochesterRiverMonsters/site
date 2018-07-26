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

  makeNav(navObj){
    var myNavArray = [];
    for(var i = 0; i < navObj.linkArray.length; i++){
      myNavArray.push(<Nav><NavText><a href={navObj.linkArray[i]}>{navObj.textArray[i]}</a></NavText></Nav>)
    }
    return (myNavArray);
  }

  render() {
        return (
          <BrowserView>
            <BaseContainer style={{position: 'fixed', top: 0}}>
              <SideNav highlightBgColor="#eee">
                <h1 className="text-center left-nav-header">{this.props.navArray.title}</h1>
                <div className="text-left">
                  <Nav>
                    <NavText><a href="/">Home</a></NavText>
                  </Nav>
                  {this.makeNav(this.props.navArray)}
                </div>
              </SideNav>
            </BaseContainer>
          </BrowserView>
        )
      }
    }
