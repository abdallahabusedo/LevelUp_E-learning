import React , { useState , useEffect } from 'react';
import { auth } from "../../services/firebase";
import UserProfile from "./../../components/profile/UserProfile";

const Profile = () => {

  const [ userState , setUserState ] = useState( {
    currentUser: auth.currentUser , 
    loggedIn: false 
  });

  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      if (user) {
        setUserState( { currentUser:user , loggedIn:true } );
      } else {
        setUserState( { currentUser:user , loggedIn:true } );
      }
    });
  }, [] );

  if( userState.loggedIn ) {
    return (
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <UserProfile currentUser={userState.currentUser}/>
        </div>
      </div>
    );
  } else {
    return (
      <>
      </>
    );
  }
  
};

export default Profile;
