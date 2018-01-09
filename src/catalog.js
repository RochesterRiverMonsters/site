import React from 'react';
import './css/catalog.css';
import fire from './fire.js'
import {withRouter} from 'react-router-dom'
require("firebase/firestore");

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

class FormControl extends React.Component {
  constructor(props) {
    super(props);
    var className = 'form-control';
    if (this.props.error) {
      className = className + " rrm-form-error";
    }

    this.state = {
      className: {className}
    };

  }

  render() {
    return(
      <div className="form-group">
        <label htmlFor={this.props.component}>{this.props.label}</label>
        {this.props.children}
      </div>
    );
  }
}

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = props.listener.bind(this);


  }

  handleChange(e) {
    this.props.onClassNameChange(e.target.className)
  }

  handleError() {
  }

  render() {

    return(
      <FormControl component={this.props.component} label={this.props.label}>
        <input type="text" className="form-control" name={this.props.firstNameField} id={this.props.firstNameField} placeholder="First Name" onChange={(e) => this.handleChange(e)}/>
        <input type="text" className="form-control" name={this.props.lastNameField} id={this.props.lastNameField} placeholder="Last Name" onChange={(e) => this.handleChange(e)}/>
      </FormControl>
    );
  }
}

class GeneralField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = props.listener.bind(this);
  }

  render() {
    return(
      <FormControl component={this.props.component} label={this.props.label}>
        <input type={this.props.type} placeholder={this.props.placeholder} className='form-control' name={this.props.component} id={this.props.component} onChange={(e) => this.handleChange(e)}/>
      </FormControl>
    );
  }
}

class SelectField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = props.listener.bind(this);
  }

  render() {
    return (
      <FormControl component={this.props.component} label={this.props.label}>
        <select className='form-control' name={this.props.component} id={this.props.component} onChange={(e) => this.handleChange(e)}>
          {this.props.children}
        </select>
      </FormControl>
    );
  }
}

class PositionField extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = props.listener.bind(this);
  }

  render() {
    return(
      <SelectField listener={this.props.listener} component={this.props.component} label={this.props.label}>
          <option val="na" disabled="true" selected="true">Select Position</option>
          <option val="runr">Runner</option>
          <option val="goal">Goalie</option>
          <option val="unkn">Undecided</option>
      </SelectField>
    );
  }
}

class HandednessField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <SelectField listener={this.props.listener} component={this.props.component} label={this.props.label}>
        <option val="na" disabled="true" selected="true">Select Preferred Hand</option>
        <option val="R">Right</option>
        <option val="L">Left</option>
      </SelectField>
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
            <li>PeeWee (2006 & 2007): 6 - 7:20PM</li>
            <li>Bantam (2004 & 2005): 7:20 - 8:40PM</li>
            <li>Midget (2001 - 2003): 8:40 - 10PM</li>
          </ul>
        </CatalogDescription>
        <CatalogDescription name="Price" description="$40" />
        <CatalogDescription name="Includes">
          <ul>
            <li>Tryout fee</li>
            <li>River Monsters shooter shirt</li>
          </ul>
        </CatalogDescription>
        <p className="text-danger"><i>All fields are required</i></p>

        <OrderForm />
      </div>
    )
  }
}

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    var uuid = require('uuid4');
    this.state = {
      uuid: uuid()
    }
    this.buildForm();
  }

  addListener(listenerRef) {
    this.listeners.push(listenerRef);
  }

  buildForm() {
    return(
        <form>
          <Name listener={this.handleChange} label="Player Name" component="playerFirstName" firstNameField="playerFirstName" lastNameField="playerLastName"/>
          <Name listener={this.handleChange} label="Parent Name" component="parentFirstName" firstNameField="parentFirstName" lastNameField="parentLastName"/>
          <GeneralField listener={this.handleChange} label="Player Date of Birth" component="dob" type="date" />
          <GeneralField listener={this.handleChange} placeholder="(585) 555-1212" label="Primary Phone Number" component="primaryPhoneNumber" type="tel" />
          <GeneralField listener={this.handleChange} placeholder="monster@rochesterrivermonsters.com" label="Primary Email Address" component="primaryEmailAddress" type="email" />
          <PositionField listener={this.handleChange} label="Primary Position" component="position" />
          <HandednessField listener={this.handleChange} label="Preferred Hand" component="handedness" />
          <input className="btn btn-default" type="button" onClick={(e) => this.handleSubmit(e)} value="Sign Up"/>
        </form>
    )
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    var error = false;
    var state = this.state;
    if (state.playerFirstName === undefined || state.playerFirstName === "" || state.playerLastName === undefined || state.playerLastName === "" ) {
      this.setState((state) => ({playerNameError: true}));
      this.playerNameComponent.setState((old) => {className: old.className.append(' rrm-form-error')});
      error = true;
    }

    if (state.parentFirstName === undefined || state.parentFirstName === "" || state.parentLasttName === undefined || state.parentLasttName === "" ) {
      error = true;
    }

    if (state.dob === undefined || state.dob ==="") {
      error = true;
    }

    // if (!error) {
      var doc = {
        player: {
          name: {
            first: state.playerFirstName,
            last: state.playerLastName
          },
          position: state.position,
          handedness: state.handedness,
          dob: state.dob
        },
        guardian: {
          name: {
            first: state.parentFirstName,
            last: state.parentLastName
          },
          phone: state.primaryPhoneNumber,
          email: state.primaryEmailAddress
        }
      }

      // Initialize Cloud Firestore through Firebase
      var db = fire.firestore();
      db.collection("youth").add(doc)
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
          // this.context.router.history.push('/thank-you');
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    // }
    event.preventDefault();
  }

  render() {
    return(
      this.buildForm()
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
