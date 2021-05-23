import React, { useState, useEffect } from "react";
import { database, auth } from "./../../services/firebase";

export default function UserForm (props) {
  
  var [Value, setValue] = useState({
    username: "",
    profileImage: "",
    job: "",
    email: "",
    password: "",
    Bio: "",
    LinkGitHub: "",
    LinkLinkedIn: "",
  });

  var [readOnly, setReadOnly] = useState(true);
  var [Email_Password , setEmail_Password ] = useState(true);

  useEffect ( () => {
      return database.ref("user").child(auth.currentUser.uid).once('value', (snapshot) => {
        var newData = {
          username: "",
          profileImage: "",
          job: "",
          email: "",
          password: "",
          Bio: "",
          LinkGitHub: "",
          LinkLinkedIn: "",
          EducationPosition: "",
        };

        snapshot.forEach( snap => { newData[snap.key] = snap.val(); });
        setValue( newData );
      });
      
  },[ setValue ] );

  console.log(Value);
  
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
    setEmail_Password(true);
    setReadOnly(true);
  };

  const toggleEdit = () => {

    setReadOnly(false);
    if( Value.password !== "Google Sign In")
      setEmail_Password(false);
  };

  return (
    <form className="FormDiv" autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group textBoxMa">
        <div className="input-group-prepend">
          <div className="input-group-text userIcon">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          required
          className="form-control inputwid"
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
          readOnly={Email_Password}
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