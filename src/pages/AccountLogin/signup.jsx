import React, { useState } from "react";
import NavigationBar from "../../components/navComponent";

import { Link, useHistory } from "react-router-dom";
import { fireStore } from "./../../services/firebase";
import { useAuth } from "../../services/authContext";
import "../../assets/styles/Form.css";
const SignUp = () => {
  const { signup } = useAuth();
  const history = useHistory();
  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
    job: "",
  });

  const handleChange = (event) => {
    let {name,value} = event.target;
    setData({ 
      ...data,
      [name]: value 
    });
    console.log(data)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { email, password, username, job } = data;

    signup(email, password).then( result => {
        console.log("success");
        fireStore
          .collection("users")
          .doc(result.user.uid)
          .set({
            username,
            profileImage: "",
            job,
            email,
            password,
            Bio: "",
            LinkGitHub: "",
            LinkLinkedIn: "",
            Credentials: "Student",
          })
          .then(() => {
            console.log("Sign Up Success");
            history.push(`/user/profile`);
            //this.props.history.push(`/`);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>
        <div className="form-actions">
          <input
            className="btn btn-primary"
            id="btn-logout"
            type="submit"
            value="Sign Up"
            name="userAuth"
            onClick={handleSubmit}
          />
        </div>
        <div className="form-footer">
          <span>Already have an account </span>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
