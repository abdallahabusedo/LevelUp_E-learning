import React, { Component } from "react";
import Dummy from "../assets/Images/dummyprofile.jpg";

class ProfileImage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>Dummy Nav bar</div>
        <div>
          <img src={Dummy} alt="profile" />
        </div>
        <form>
          <label>
            Username:
            <input
              name="username"
              type="text"
              value={this.props.username}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Job:
            <input
              name="job"
              type="text"
              value={this.props.job}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            email:
            <input
              name="email"
              type="text"
              value={this.props.email}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Bio:
            <input
              name="Bio"
              type="text    "
              value={this.props.Bio}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            GitHub Link:
            <input
              name="LinkGitHub"
              type="text"
              value={this.props.LinkGitHub}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            LinkedIn Link:
            <input
              name="LinkLinkedIn"
              type="text"
              value={this.props.LinkLinkedIn}
              onChange={this.handleInputChange}
            />
          </label>
          <button>Save</button>
        </form>
        <div>this part for my courses</div>

        <div>Dummy Footer</div>
      </div>
    );
  }
}

export default ProfileImage;
