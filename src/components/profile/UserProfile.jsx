import React from "react";
import UserForm from "./UserForm";
import { fireStore } from "../../services/firebase";
import UserImage from "./UserImage";
import { useAuth } from "../../services/authContext";
import "./../../assets/styles/profile.css";
import NavigationBar from "./../navComponent";
const UserProfile = () => {
  const { currentUser  } = useAuth();

  const AddOrEdit = (obj) => {
    console.log(obj);
    fireStore
      .collection("users")
      .doc(currentUser.uid)
      .set(obj)
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div id="profile">
        <NavigationBar />
        <UserImage uid={currentUser.uid} />
        <UserForm AddOrEdit={AddOrEdit} />
        
      </div>
      
    </>
  );
};

export default UserProfile;
