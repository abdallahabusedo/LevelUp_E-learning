// import React, { useState } from 'react'
// import dummyimage from './../assets/Images/dummyprofile.jpg'
// function CourseImage() {
//     const [userImage, setUserImage] = useState();

//     useEffect(() => {
//         return fireStore.collection("courses").doc(userId).get().then(doc => {
//             if (doc.exists) {
//                 var img = doc.get("profileImage");
//                 if (img === "")
//                     setUserImage(dummy);
//                 else
//                     setUserImage(doc.get("profileImage"));
//             }
//         });

//     }, [userId, setUserImage]);

//     const metadata = {
//         contentType: 'image/jpg',
//     };


//     const getFile = () => {
//         document.getElementById("file").click();
//     }




//     const updateImage = async (e) => {

//         var imgRef = storage.ref("Images").child(`${props.id}/courseImage`);

//         await imgRef.put(e.target.files[0], metadata);

//         imgRef.getDownloadURL()
//             .then((url) => {
//                 fireStore.collection("courses").doc(props.id)
//                     .update({
//                         profileImage: url
//                     }).then(() => { console.log("Image Uploaded"); });
//             }).catch(err => { console.log(err); });
//     }


//     return (
//         <div>
//             <div className="card ImageDiv">
//                 <img src={imageSrc} className="card-img" alt="courseimage" />
//             </div>

//             <div className="custom-file-upload">
//                 <input type="file" id="file" accept="image/*" onChange={updateImage} />
//                 <input
//                     type="button"
//                     onClick={getFile}
//                     value="Upload File"
//                     className="button3"
//                 />
//             </div>
//         </div>
//     )
// }

// export default CourseImage







