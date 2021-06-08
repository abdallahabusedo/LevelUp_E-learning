import React from "react";
import UserForm from "./UserForm";
import { fireStore } from "../../services/firebase";
import UserImage from "./UserImage";
import "./../../assets/styles/profile.css";
const UserProfile = (props) => {
  var userId = props.currentUser.uid;
  const AddOrEdit = (obj) => {
    fireStore
      .collection("users")
      .doc(userId)
      .set(obj)
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar_Color">
          <a className="navbar-brand" href="#">
            Profile Page
          </a>
        </nav>

        <UserImage uid={userId} />
        <UserForm AddOrEdit={AddOrEdit} />
      </div>
    </>
  );
};

export default UserProfile;
