import React from "react";
import { useHistory } from "react-router-dom";
import UserForm from "./UserForm";
import { fireStore } from "../../services/firebase";
import UserImage from "./UserImage";
import { useAuth } from "../../services/authContext";
import "./../../assets/styles/profile.css";
import NavigationBar from "./../navComponent";
const UserProfile = () => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const AddOrEdit = (obj) => {
    fireStore
      .collection("users")
      .doc(currentUser.uid)
      .set(obj)
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogOut = async () => {
    await logout().then(() => {
      history.push("/login");
    });
  };

  return (
    <>
      <div id="profile">
        <NavigationBar />
        <UserImage uid={currentUser.uid} />
        <UserForm AddOrEdit={AddOrEdit} />
        
        <input type="button" id="btn-logout" onClick={handleLogOut} value="Sign Out" />
        
      </div>
      
    </>
  );
};

export default UserProfile;
