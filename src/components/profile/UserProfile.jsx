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
      <div>
        <NavigationBar />
        <UserImage uid={currentUser.uid} />
        <UserForm AddOrEdit={AddOrEdit} />
      </div>
      <div>
        <button onClick={handleLogOut}>Sign Out</button>
      </div>
    </>
  );
};

export default UserProfile;
