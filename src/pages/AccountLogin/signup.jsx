import React, { useState  } from 'react';
import NavigationBar from "../../components/navComponent";

import { Link } from 'react-router-dom';
import { fireStore } from "./../../services/firebase";
import { useAuth } from "../../services/authContext"
import "../../assets/styles/Form.css";
const SignUp = () => {

  const {authContext} = useAuth();
  const [data,setData] = useState({
    email: "",
    password: "",
    username: "",
    job: "",
    EducationPosition: ""
  });

  const handleChange = ( event ) => {
      let name = event.target.name , value = event.target.value;
      setData({ [name]:value } );
  }

  const handleSubmit = async ( event ) => {
      event.preventDefault();
      let { email, password, username, job, EducationPosition } = data;

      authContext.SignUp(email, password)
        .then((result) => {
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
                EducationPosition
            }).then(() => {
              console.log("Sign Up Success");
              this.props.history.push(`/user/profile`);    
              //this.props.history.push(`/`); 
            });
          
        })
        .catch((err) => {
          console.log(err);
        });
  }

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
            type="submit"
            value="Sign Up"
            name="userAuth"
            onClick={handleSubmit}
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

export default SignUp;