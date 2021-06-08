import React, { useState, useEffect } from "react";
import { auth } from "../../services/firebase";
import UserProfile from "./../../components/profile/UserProfile";
import "./../../assets/styles/profile.css";
const Profile = () => {
  const [userState, setUserState] = useState({
    currentUser: auth.currentUser,
    loggedIn: false,
  });

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        setUserState({ currentUser: user, loggedIn: true });
      } else {
        setUserState({ currentUser: user, loggedIn: false });
      }
    });
  }, []);

  if (userState.loggedIn) {
    return <UserProfile currentUser={userState.currentUser} />;
  } else {
    return <></>;
  }
};

export default Profile;
