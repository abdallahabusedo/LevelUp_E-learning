import React, { Component } from 'react';
import NavigationBar from "../../components/navComponent";

import { Link } from 'react-router-dom';

import { database } from "../../services/firebase";
import { GoogleAuth, userAuth } from "../../services/Authentication";

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
  }

  handleSubmit = ( event ) => {
      event.preventDefault();
      
      let {email , password} = this.state;
      if( event.target.name === "userAuth") {
          userAuth( email , password ).then( (result) => {
              console.log("success");
              this.props.history.push('/user/profile');
          })
          .catch(err => {
              alert(err.message);
          });
      } else if( event.target.name === "googleAuth") {

          GoogleAuth().then( (result) => {
              console.log("success");
              var ref = database.ref("user");
              
              ref.once("value" , snap => {
                if( !snap.hasChild(result.user.uid) ) {
                  ref.child(result.user.uid).set({
                    username: result.user.displayName,
                    profileImage: "",
                    job: "",
                    email: result.user.email,
                    password: "Google Sign In",
                    Bio: "",
                    LinkGitHub: "",
                    LinkLinkedIn: "",
                  }).then( () => {
                    this.props.history.push('/user/profile');
                  });
                }
              });
                
          }).catch ( err => {
              console.log( err.message );
          });
      } 
  } 

  render() {
    return (
      <div className="form-container">
        <NavigationBar/>
        <h1> Login </h1>
        <hr/>
        <form name="userAuth" onSubmit={this.handleSubmit}>
          <div className="form-group" onClick={this.handleSubmit}>
            <button type="button" name="googleAuth" > <img src="https://www.iconfinder.com/data/icons/social-media-2210/24/Google-512.png" alt="" name="googleAuth"/> Continue with Google </button>
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
