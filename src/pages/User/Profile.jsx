import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../services/authContext";
import UserProfile from "./../../components/profile/UserProfile";
import "./../../assets/styles/profile.css";
const Profile = () => {

  const { currentUser } = useAuth()
  const history = useHistory()

  return <UserProfile currentUser={currentUser} />;

};

export default Profile;
