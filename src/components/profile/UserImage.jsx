import React from "react";
import "./../../assets/styles/profile.css";
import dummy from "./../../assets/Images/dummyprofile.jpg";
export default function UserImage() {
  return (
    <div>
      <div className="card ImageDiv">
        <img src={dummy} className="card-img-top" alt="profile" />
        <div className="card-body">
          <p className="card-text">this is the dummy text</p>
        </div>
      </div>
    </div>
  );
}
