import React , { useState , useEffect } from "react";
import "./../../assets/styles/profile.css";
import dummy from "./../../assets/Images/dummyprofile.jpg";
import { storage , database } from "./../../services/firebase";

export default function UserImage( props ) {
  var userId = props.uid;

  const [userImage , setUserImage] = useState( dummy );

  useEffect ( () => {
      return database.ref("user")
                     .child(userId)
                     .child("profileImage")
                     .once('value', snap => { if( snap ) setUserImage( snap.val() ); });
        
  },[ userId , setUserImage ] );

  const metadata = {
    contentType: 'image/jpg',
  };

  const getFile = () => {
    document.getElementById("file").click();
  }

  const updateIamge = async ( e ) => {
  
    var imgRef = storage.ref("Images").child(`${props.uid}/userImage`);

    await imgRef.put(e.target.files[0],metadata);
   
    imgRef.getDownloadURL()
          .then((url) => {
            database.ref("user")
                    .child(userId)
                    .child("profileImage")
                    .set(url);
          }).catch( err => { console.log(err); });
  }

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
