import React from "react";
import UserForm from "./UserForm";
import { database } from "../../services/firebase";
import UserImage from "./UserImage";

const UserProfile = (props) => {
  var userId = props.currentUser.uid ;
  const AddOrEdit = (obj) => {
    database
      .ref("user")
      .child(userId)
      .set (obj).catch( (err) => { console.log(err); });
  };


  return (
    <>
      <div className="container py-4">
        <div className="p-10 mb-4 bg-light rounded-3">
          <div className="container">
            <h1 className="">Profile Page</h1>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-5">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <UserImage uid={userId} />
            </div>
          </div>
          <div className="col-md-7">
            <div className="h-100 p-5 bg-light border rounded-3">
              <UserForm AddOrEdit={AddOrEdit} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
