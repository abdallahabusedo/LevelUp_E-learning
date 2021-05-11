import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";
import { database } from "./../services/firebase";

const UserProfile = () => {
  var [contactsObject, setContactsObject] = useState({});

  const AddOrEdit = (obj) => {
    database
      .ref("user")
      .child("contacts")
      .push(obj, (err) => {
        if (err) {
          console.log(err);
        }
      });
  };
  return (
    <>
      <div className="container py-4">
        <div className="p-10 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-10 fw-bold">Profile Page</h1>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-5">
            <div className="h-100 p-5 text-white bg-dark rounded-3"></div>
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
