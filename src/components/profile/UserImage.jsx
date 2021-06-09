import React, { useState, useEffect } from "react";
import "./../../assets/styles/profile.css";
import dummy from "./../../assets/Images/dummyprofile.jpg";
import { storage, fireStore } from "./../../services/firebase";
import { useAuth } from "./../../services/authContext";

export default function UserImage() {
  const { currentUser } = useAuth();
  const [userImage, setUserImage] = useState();

  useEffect(() => {
    fireStore.collection("users").doc(currentUser.uid)
    .onSnapshot((doc) => {
      if (doc.exists) {
        var img = doc.data().profileImage;
        if (img === "") setUserImage(dummy);
        else setUserImage(doc.get("profileImage"));
      }

    });
    
  }, [currentUser, setUserImage]);

  const metadata = {
    contentType: "image/jpg",
  };

  const getFile = () => {
    document.getElementById("file").click();
  };

  const updateIamge = async (e) => {
    var imgRef = storage.ref("Images").child(`${currentUser.uid}/userImage`);

    await imgRef.put(e.target.files[0], metadata);

    imgRef
      .getDownloadURL()
      .then((url) => {
        fireStore
          .collection("users")
          .doc(currentUser.uid)
          .update({
            profileImage: url,
          })
          .then(() => {
            console.log("Image Uploaded");
            window.location.reload();
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="card ImageDiv">
        <img src={userImage} className="card-img" alt="profile" />
      </div>

      <div className="custom-file-upload">
        <input type="file" id="file" accept="image/*" onChange={updateIamge} />
        <input
          type="button"
          onClick={getFile}
          value="Upload File"
          className="button3"
        />
      </div>
    </div>
  );
}
