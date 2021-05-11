import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";
import { database } from "../../services/firebase";
import UserImage from "./UserImage";

const UserProfile = () => {
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
      <div class="container py-4">
        <div class="p-10 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-10 fw-bold">Profile Page</h1>
          </div>
        </div>

        <div class="row align-items-md-stretch">
          <div class="col-md-5">
            <div class="h-100 p-5 text-white bg-dark rounded-3">
              <UserImage />
            </div>
          </div>
          <div class="col-md-7">
            <div class="h-100 p-5 bg-light border rounded-3">
              <UserForm AddOrEdit={AddOrEdit} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
