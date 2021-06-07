import React, { useState, useEffect } from "react";
import "./../../assets/styles/profile.css";
import dummy from "./../../assets/Images/dummyprofile.jpg";
import { storage, fireStore } from "./../../services/firebase";

export default function UserImage(props) {
  var userId = props.uid;

  const [userImage, setUserImage] = useState();

  useEffect(() => {
    return fireStore
      .collection("users")
      .doc(userId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          var img = doc.get("profileImage");
          if (img === "") setUserImage(dummy);
          else setUserImage(doc.get("profileImage"));
        }
      });
  }, [userId, setUserImage]);

  const metadata = {
    contentType: "image/jpg",
  };

  const getFile = () => {
    document.getElementById("file").click();
  };

  const updateIamge = async (e) => {
    var imgRef = storage.ref("Images").child(`${props.uid}/userImage`);

    await imgRef.put(e.target.files[0], metadata);

    imgRef
      .getDownloadURL()
      .then((url) => {
        fireStore
          .collection("users")
          .doc(userId)
          .update({
            profileImage: url,
          })
          .then(() => {
            console.log("Image Uploaded");
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
