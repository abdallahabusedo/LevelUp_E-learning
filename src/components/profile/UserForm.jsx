import React, { useState, useEffect } from "react";

const UserForm = (props) => {
  const initialState = {
    username: "",
    profileImage: "",
    job: "",
    email: "",
    Bio: "",
    LinkGitHub: "",
    LinkLinkedIn: "",
    userId: "",
  };
  var [Value, setValue] = useState(initialState);

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
          className="form-control"
          placeholder="Email"
          name="email"
          value={Value.email}
          onChange={handleInputChange}
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
        />
      </div>

      <div className="form-group">
        <input
          required
          type="submit"
          value="Save"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default UserForm;
