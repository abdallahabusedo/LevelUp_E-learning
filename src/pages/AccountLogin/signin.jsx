import React, { useState } from "react";
import NavigationBar from "../../components/navComponent";

import { Link, useHistory } from "react-router-dom";

import { fireStore } from "../../services/firebase";
import { useAuth } from "../../services/authContext";

import "../../assets/styles/Form.css";
const SignIn = () => {
  const { login, googleSign, currentUser } = useAuth();
  const history = useHistory();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = async (event) => {
    let name = event.target.name,
      value = event.target.value;
    setData({ [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let { email, password } = data;

    if (event.target.name === "userAuth") {
      await login(email, password)
        .then(() => {
          console.log("User Auth Success");
          history.push("/user/profile");
        })
        .catch((err) => {
          alert(err.message);
        });
    } else if (event.target.name === "googleAuth") {
      await googleSign()
        .then(() => {
          console.log("Google Auth Success");
          var ref = fireStore.collection("users");

          ref.get(currentUser.user.uid).then((doc) => {
            if (!doc.exists)
              ref.doc(currentUser.user.uid).set({
                username: currentUser.user.displayName,
                profileImage: "",
                job: "",
                email: currentUser.user.email,
                password: "Google Sign In",
                Bio: "",
                LinkGitHub: "",
                LinkLinkedIn: "",
                Credentials: "Student",
              });
            console.log("doc", doc);
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
      history.push("/user/profile");
    }
  };

  return (
    <div className="form-container">
      <NavigationBar />
      <h1> Login </h1>
      <hr />
      <form name="userAuth" onSubmit={handleSubmit}>
        <div className="form-group" onClick={handleSubmit}>
          <button
            type="button"
            name="googleAuth"
            className="btn btn-primary"
            id="btn-logout"
          >
            <img
              src="https://www.iconfinder.com/data/icons/social-media-2210/24/Google-512.png"
              alt=""
              name="googleAuth"
            />
            Continue with Google
          </button>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            required=""
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
            required=""
            className="form-control"
            id="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="form-actions">
          <input
            type="submit"
            className="btn btn-primary"
            id="btn-logout"
            value="Sign In"
          />
          <span>or</span>
          <Link to="/"> forgot password</Link>
        </div>
        <div className="form-footer">
          <span>Don't have an account </span>
          <Link to="/signup">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
