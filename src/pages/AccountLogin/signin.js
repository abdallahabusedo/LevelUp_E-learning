import React, { Component } from 'react';
import NavigationBar from "../../components/navComponent";

import { Link } from 'react-router-dom';
import { auth , provider } from '../../services/firebase';

import "../../assets/styles/Form.css";
export default class SignIn extends Component {

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
    console.log(event.target.name);

    if( event.target.name === "userAuth") {
      let { email , password } = this.state;
      this.props.history.push('/');

      /*
      auth.signInWithEmailAndPassword (this.state.email,this.state.password)
      .then( () => {
        this.props.history.push('/');
      })
      .catch(err => {
          alert(err.message);
      });*/

    } else if( event.target.name === "googleAuth") {
      let { email , password } = this.state;
      this.props.history.push('/');

      /*
      provider.addScope('profile');
      provider.addScope('email');
      auth.signInWithPopup(provider)
      .then((result) => {
    
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
    
      }).catch(err => {
        alert(err.message);
      });*/
    } 
  }

  render() {
    return (
      <div className="form-container">
        <NavigationBar/>
        <h1> Login </h1>
        <hr/>
        <form name="userAuth" onSubmit={this.handleSubmit}>
          <div className="form-group"  onClick={this.handleSubmit}>
            <button type="button" name="googleAuth"> <img src="https://www.iconfinder.com/data/icons/social-media-2210/24/Google-512.png" alt=""/> <b> Continue with Google</b> </button>
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" required="" className="form-control" id="email" placeholder="Email" name="email" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" required="" className="form-control" id="password" placeholder="Password" name="password" onChange={this.handleChange}/>
          </div>
          <div className="form-actions">
            <input type="submit" value="Sign In" />
            <span>or</span><Link to="/"> forgot password</Link>
          </div>
          <div className="form-footer">
            <span>Don't have an account </span><Link to="/signup">Register</Link>
          </div>
        </form>
      </div>
    )
  }
}
