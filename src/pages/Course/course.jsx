import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/navComponent";
import "../../assets/styles/course.css";
import firebase from "../../services/firebase";
// import 'firebase/firestore';
import { useParams } from "react-router-dom";
import { useAuth } from "../../services/authContext";

// Make sure the client is loaded and sign-in is complete before calling this method.

export default function Course(props) {
  // course data , loading state and found or not state
  let [course, setCourse] = useState([]);
  let [loading, setLoading] = useState(true);
  let [notFound, setNotFound] = useState(false);
  let [enrollbutton, setenrollbutton] = useState();
  const ref = firebase.firestore().collection("courses");
  const users = firebase.firestore().collection("users");
  const { currentUser } = useAuth();

  // get course id from the url
  let { id } = useParams();

  // retrive course data
  function getCourseData() {
    ref
      .where(firebase.firestore.FieldPath.documentId(), "==", id)
      .get()
      .then((Snapshot) => {
        if (Snapshot.empty) {
          setNotFound(true);
          setLoading(false);
          return;
        }
        console.log("hi");
        const items = [];
        Snapshot.forEach((doc) => {
          items.push(doc.data());
        });

        setCourse(items);
        setLoading(false);
      });
  }
  //enroll the user in the course
  function enrolluser() {
    users
      .where("email", "==", currentUser.email)
      .get()
      .then((user) => {
        console.log("hi");
        let firstTime = true;
        let myuser;
        let userid;
        user.forEach((doc) => {
          console.log("hi");
          if (firstTime) {
            myuser = doc.data();
            userid = doc.id;
            firstTime = false;
          }
        });
        console.log(myuser);
        if (!myuser.courses) myuser.courses = [];
        myuser.courses.push(course[0]["name"]);
        users.doc(userid).set(myuser);
        setenrollbutton(
          <button
            type="button"
            className="btn btn-dark goCoBTN3"
            onClick={enrolluser}
          >
            enroll
          </button>
        );
      });
  }
  //go watch
  function videowatch() {
    props.history.push("/videoPage/" + id);
  }
  //setenrollbutton
  function getenrollbutton() {
    if (!currentUser) {
      setenrollbutton(
        <button
          type="button"
          className="btn btn-dark goCoBTN3"
          onClick={() => props.history.push("/login")}
        >
          login
        </button>
      );
      return;
    }
    if (course[0]) {
      console.log(course[0]);
      users
        .where("email", "==", currentUser.email)
        .get()
        .then((user) => {
          let firstTime = true;
          let myuser;
          user.forEach((doc) => {
            if (firstTime) {
              myuser = doc.data();
              firstTime = false;
            }
          });
          console.log(myuser);
          if (course[0]["instractorMail"] === myuser.email) {
            setenrollbutton(
              <h4>
                <span className="badge bg-light text-dark">
                  you own this course
                </span>
              </h4>
            );
          } else if (
            myuser.courses &&
            myuser.courses.includes(course[0]["name"])
          ) {
            setenrollbutton(
              <button
                type="button"
                className="btn btn-dark goCoBTN3"
                onClick={videowatch}
              >
                watch content
              </button>
            );
          } else {
            setenrollbutton(
              <button
                type="button"
                className="btn btn-dark  goCoBTN3"
                onClick={enrolluser}
              >
                enroll
              </button>
            );
          }
        });
    }
  }
  useEffect(() => {
    getCourseData();
    // console.log(getplaylist())
  });
  useEffect(() => {
    console.log("reloding");
    return getenrollbutton();
  }, [course]);

  if (loading) {
    return <div></div>;
  }
  // if the course not found display 404 not found
  if (notFound) {
    return (
      <div>
        <header className="page-header">
          <NavigationBar />
        </header>
        <section>
          <div className="not-found">Oops! That course doesn’t exist .</div>
        </section>
      </div>
    );
  }
  return (
    <div>
      <header className="page-header">
        <NavigationBar />
      </header>
      <section>
        <div>
          <div className="course-wallpaper">
            <div className="course-name">{course[0]["name"]}</div>
            <div className="course-bio">
              <p>{course[0]["bio"]}</p>
            </div>
            <div className="course-bio">
              <p>Made by : {course[0]["madeby"]}</p>
            </div>
            <div className="enrollment-button">{enrollbutton}</div>
          </div>
          <div className="course-info">
            <h1 className="heading">course content</h1>
            <p className="heading2">{course[0]["content"]}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
