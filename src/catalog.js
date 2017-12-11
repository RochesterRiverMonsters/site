import React from 'react';
import {injectStripe, Elements, StripeProvider} from 'react-stripe-elements';
import './css/catalog.css';

class CatalogDescription extends React.Component {

  render() {
    return(
      <div className="row">
        <div className="col-sm-2 rrm-item-name">{this.props.name}</div>
        <div className="col-sm-6 rrm-item-desc">{this.props.description}</div>
        <div className="col-sm-6 rrm-item-desc">{this.props.children}</div>
      </div>
    );
  }
}

class CatalogItem extends React.Component {
  render() {
    return(
      <div className="container rrm-catalog-box">
        <CatalogDescription name="Date" description="January 27, 2018" />
        <CatalogDescription name="Who" description="Boys born between 2001 and 2007" />
        <CatalogDescription name="Location" description="Rochester Sports Garden" />
        <CatalogDescription name="Time">
          <ul>
            <li>PeeWee (2006 & 2007): 5-6PM,</li>
            <li>Bantam (2004 & 2005): 6-7PM,</li>
            <li>Midget (2001 - 2003): 7-8PM</li>
          </ul>
        </CatalogDescription>
        <CatalogDescription name="Price" description="$40" />
        <CatalogDescription name="Includes">
          <ul>
            <li>Tryout fee</li>
            <li>River Monsters shooter shirt</li>
          </ul>
        </CatalogDescription>
        <OrderForm />
      </div>
    )
  }
}

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    var uuid = require('uuid4');
    this.state = {
      uuid: uuid()
    }
  }

  handleChange(event) {
    var key = event.target.id;
    var property = event.target.value;
    var liveState = this.state;
    liveState[key] = property;
    this.setState(liveState);
  }

  handleSubmit(event) {
    alert('A signup was submitted: ' + this.state);
    event.preventDefault();
  }

  render() {
    return(
      <StripeProvider key="pk_test_TXLov0aMrOxasXCIhLC3N61O">
        <Elements>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="playerFirstName">Participant Name</label>
              <input type="text" className="form-control" id="playerFirstName" placeholder="First Name" onChange={(e) => this.handleChange(e)}/>
              <input type="text" className="form-control" id="playerLastName" placeholder="Last Name" onChange={(e) => this.handleChange(e)}/>
            </div>
            <div className="form-group">
              <label htmlFor="parentFirstName">Parent/Guardian Name</label>
              <input type="text" className="form-control" id="parentFirstName" placeholder="First Name" onChange={(e) => this.handleChange(e)}/>
              <input type="text" className="form-control" id="parentLastName" placeholder="Last Name" onChange={(e) => this.handleChange(e)}/>
            </div>
            <div className="form-group">
              <label htmlFor="birthDate">Participant Date of Birth</label>
              <input type="date" className="form-control" id="birthDay" onChange={(e) => this.handleChange(e)}/>
            </div>
            <div className="form-group">
              <label htmlFor="primaryPhoneNumber">Primary Phone Number</label>
              <input type="tel" className="form-control" id="primaryPhoneNumber" placeholder="(585) 555-1212" onChange={(e) => this.handleChange(e)}/>
            </div>
            <div className="form-group">
              <label htmlFor="primaryEmailAddress">Primary Email Address</label>
              <input type="email" className="form-control" id="primaryEmailAddress" placeholder="monster@rochesterrivermonsters.com" onChange={(e) => this.handleChange(e)}/>
            </div>
            <div className="form-group">
              <label htmlFor="position">Primary Position</label>
              <select className="form-control" id="position" onChange={(e) => this.handleChange(e)}>
                <option val="runr">Runner</option>
                <option val="goal">Goalie</option>
                <option val="unkn">Undecided</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="handedness">Preferred Hand</label>
              <select className="form-control" id="handedness" onChange={(e) => this.handleChange(e)}>
                <option val="R">Right</option>
                <option val="L">Left</option>
              </select>
            </div>
            <input className="btn btn-default" type="submit" value="Sign Up"/>
          </form>
        </Elements>
      </StripeProvider>
    )
  }
}

export class Catalog extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row rrm-catalog-header">
          <h2>Rochester River Monsters Youth Team Tryout</h2>
        </div>
        <div className="row">
          <CatalogItem />
        </div>
      </div>
    );
  }
}
