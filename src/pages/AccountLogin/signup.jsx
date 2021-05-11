import React, { Component } from 'react';
import NavigationBar from "../../components/navComponent";

import { Link } from 'react-router-dom';
import { createUser } from "../../services/Authentication";
import { database } from "./../../services/firebase";
import "../../assets/styles/Form.css";
export default class SignUp extends Component {

  constructor(props)
  {
      super(props);
      this.state = {
        email: "",
        password: "",
        username: "",
        job: "",
      };
  }

  handleChange = ( event ) => {
      let name = event.target.name , value = event.target.value;
      this.setState({ [name]:value } );
  }

  handleSubmit = ( event ) => {
      event.preventDefault();
      let { email, password, username, job } = this.state;
      createUser(email, password)
        .then((result) => {
          console.log("success");
          database.ref("user").push({
            email,
            password,
            username,
            job,
          });
          this.props.history.push("/user/profile");
        })
        .catch((err) => {
          console.log(err);
        });
  }

  render() {
    return (
      <div className="form-container">
        <NavigationBar />
        <h1> Signup </h1>
        <hr />

        <form>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              required={true}
              className="form-control"
              id="username"
              placeholder="Username"
              name="username"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              required={true}
              className="form-control"
              id="email"
              placeholder="Email"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              required={true}
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Job/Education</label>
            <input
              type="text"
              required={true}
              className="form-control"
              id="job"
              placeholder="Job / Education"
              name="job"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-actions">
            <input
              type="submit"
              value="Sign Up"
              name="userAuth"
              onClick={this.handleSubmit}
            />
          </div>
          <div className="form-footer">
            <span>Already have an account </span>
            <Link to="/signin">Login</Link>
          </div>
        </form>
      </div>
    );
  }
}
