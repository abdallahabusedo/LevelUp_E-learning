import React, { useState, useEffect } from "react";
import { fireStore, auth } from "./../../services/firebase";
import { useAuth } from "./../../services/authContext";

export default function UserForm(props) {
  const { currentUser } = useAuth();
  var [Info, setInfo] = useState({
    username: "",
    profileImage: "",
    job: "",
    email: "",
    password: "",
    Bio: "",
    LinkGitHub: "",
    LinkLinkedIn: "",
    EducationPosition: "",
  });

  var [readOnly, setReadOnly] = useState(true);
  var [Email_Password, setEmail_Password] = useState(true);

  useEffect(() => {
    return fireStore
      .collection("users")
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setInfo({
            username: doc.get("username"),
            profileImage: doc.get("profileImage"),
            job: doc.get("job"),
            email: doc.get("email"),
            password: doc.get("password"),
            Bio: doc.get("Bio"),
            LinkGitHub: doc.get("LinkGitHub"),
            LinkLinkedIn: doc.get("LinkLinkedIn"),
            EducationPosition: doc.get("EducationPosition"),
          });
        }
      });
  }, [setInfo]);

  console.log(Info);

  const handleInputChange = (e) => {
    let { name, value } = e.target;

    setInfo({
      ...Info,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.AddOrEdit(Info);
    setEmail_Password(true);
    setReadOnly(true);
  };

  const toggleEdit = () => {
    setReadOnly(false);
    if (Info.password !== "Google Sign In") setEmail_Password(false);
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
          value={Info.username}
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
          value={Info.email}
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
          value={Info.job}
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
          value={Info.LinkGitHub}
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
          value={Info.LinkLinkedIn}
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
}
