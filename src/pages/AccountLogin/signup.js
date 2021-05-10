import React, { Component } from 'react';
import NavigationBar from "../../components/navComponent";

import { Link } from 'react-router-dom';
import { auth , provider } from '../../services/firebase';

import "../../assets/styles/Form.css";
export default class SignUp extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
        email:'',
        password:'',
    };
  }

  handleChange = ( event ) => {
    let name = event.target.name , value = event.target.value;
    this.setState({ [name]:value } );
    console.log(this.state);
  }

  handleSubmit = ( event ) => {
    event.preventDefault();
    let { email , password } = this.state;
    this.props.history.push('/');
    /*
    auth.createUserWithEmailAndPassword(this.state.email,this.state.password)
    .then( () => {
      this.props.history.push('/');
    })
    .catch(err => {
        alert(err.message);
    });*/
  }

  render() {
    return (
      <div className="form-container">
        <NavigationBar/>
        <h1> Signup </h1>
        <hr/>

        <form method="POST">
          <div className="form-group">
            <label>Email address</label>
            <input type="email" required="true" className="form-control" id="email" placeholder="Email" name="email" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" required="true" className="form-control" id="password" placeholder="Password" name="password" onChange={this.handleChange}/>
          </div>
          <div className="form-actions">
            <input type="submit" value="Sign Up" name="userAuth" onClick={this.handleSubmit}/>
          </div>
          <div className="form-footer">
            <span>Already have an account </span><Link to="/signin">Login</Link>
          </div>
        </form>
      </div>
    )
  }
}