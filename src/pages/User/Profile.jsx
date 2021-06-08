import React from "react";
import { useAuth } from "../../services/authContext";
import UserProfile from "./../../components/profile/UserProfile";
import "./../../assets/styles/profile.css";
const Profile = () => {

  const { currentUser } = useAuth()

  return <UserProfile currentUser={currentUser} />;

};

export default Profile;
