import React, { Component } from "react";
import ProfileImage from "../components/ProfileImage";
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      username: "abdallah",
      email: "dummy@gmail.com",
      Photo: "",
      Bio:
        "leromleromleromleromleromleromleromleromleromleromleromleromleromleromleromler omleromleromleromleromleromleromleromleromlero mleromleromleromleromleromleromleromleromleromleromleromleromleromleromleromleromleromlerom",
      CV: "",
      myCourses: "",
      LinkGitHub: "asdasdas",
      LinkLinkedIn: "asdasdsa ",
      job: "asd",
    };
  }

  render() {
    return (
      <div>
        <ProfileImage
          username={this.state.username}
          email={this.state.email}
          photo={this.state.photo}
          Bio={this.state.Bio}
          CV={this.state.CV}
          myCourses={this.state.myCourses}
          LinkGitHub={this.state.LinkGitHub}
          LinkLinkedIn={this.state.LinkLinkedIn}
          job={this.state.job}
        />
      </div>
    );
  }
}
export default Profile;