import React, { useState, useEffect } from "react";
import { database, auth } from "./../../services/firebase";
import firebase from "firebase";
const UserForm = (props) => {
  // const getData = () => {
  //   database
  //     .ref("user")
  //     .child(auth.currentUser.uid)
  //     .then((user) => {
  //       return user;
  //     });
  // };
  // console.log(getData);
  const initialState = {
    username: "",
    profileImage: "",
    job: "",
    email: "",
    Bio: "",
    LinkGitHub: "",
    LinkLinkedIn: "",
  };

  var [Value, setValue] = useState(initialState);
  var [readOnly, setReadOnly] = useState(true);
  var uidUser = auth.currentUser.uid;
  database
    .ref("user/"+uidUser)
    .once("value", (snap) => {
      console.log(snap.val());
    });
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setValue({
      ...Value,
      [name]: value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.AddOrEdit(Value);
    setReadOnly(true);
  };

  const toggleEdit = () => {
    setReadOnly(false);
  };
  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group textBoxMa">
        <div className="input-group-prepend">
          <div className="input-group-text userIcon">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          required
          className="form-control"
          placeholder="Username"
          name="username"
          value={Value.username}
          onChange={handleInputChange}
          readOnly={readOnly}
        />
      </div>
      <div className="form-group input-group textBoxMa">
        <div className="input-group-prepend ">
          <div className="input-group-text userIcon">
            <i className="fas fa-envelope"></i>
          </div>
        </div>
        <input
          required
          type="email"
          className="form-control"
          placeholder="Email"
          name="email"
          value={Value.email}
          onChange={handleInputChange}
          readOnly={readOnly}
        />
      </div>
      <div className="form-group input-group textBoxMa">
        <div className="input-group-prepend ">
          <div className="input-group-text userIcon">
            <i className="fas fa-briefcase"></i>
          </div>
        </div>
        <input
          required
          className="form-control"
          placeholder="job"
          name="job"
          value={Value.job}
          onChange={handleInputChange}
          readOnly={readOnly}
        />
      </div>
      <div className="form-group input-group textBoxMa">
        <div className="input-group-prepend ">
          <div className="input-group-text userIcon">
            <i className="fab fa-github"></i>
          </div>
        </div>
        <input
          required
          className="form-control"
          placeholder="GitHub Link"
          name="LinkGitHub"
          value={Value.LinkGitHub}
          onChange={handleInputChange}
          readOnly={readOnly}
        />
      </div>
      <div className="form-group input-group textBoxMa">
        <div className="input-group-prepend ">
          <div className="input-group-text userIcon">
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
        <input
          required
          className="form-control"
          placeholder="LinkedIn Link"
          name="LinkLinkedIn"
          value={Value.LinkLinkedIn}
          onChange={handleInputChange}
          readOnly={readOnly}
        />
      </div>

      <div className="form-group">
        <input
          required
          type="submit"
          value="Save"
          className="btn btn-primary btn-block"
        />
        <input
          required
          type="button"
          value="edit"
          className="btn btn-primary btn-block"
          onClick={toggleEdit}
        />
      </div>
    </form>
  );
};

export default UserForm;
