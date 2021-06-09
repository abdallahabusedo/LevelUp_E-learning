import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/navComponent";
import "../../assets/styles/Search.css";

import "firebase/firestore";

import firebase from "../../services/firebase";
// import { useParams } from "react-router-dom";
import { useAuth } from "../../services/authContext";
import Card from "../../components/Card";
export default function MyCourses() {
  // let { id } = useParams();

  let [results, setResults] = useState([]);

  let [loading, setloading] = useState(true);
  const { currentUser } = useAuth();
  function getSearchResults() {
    const users = firebase.firestore().collection("users");
    users
      .where("email", "==", currentUser.email)
      .get()
      .then((user) => {
        let myuser = user.docs[0].data();
        let items = [];
        if (myuser.courses)
          for (let i = 0; i < myuser.courses.length; i++) {
            let ref = firebase
              .firestore()
              .collection("courses")
              .where("name", "==", myuser.courses[i]);
            ref.get().then((Snapshot) => {
              items.push(Snapshot.docs[0]);
            });
          }
        setResults(items);
      });
  }

  useEffect(() => {
    getSearchResults();
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);
  let cards = [];
  console.log(results.length);
  results.map((e, index) => {
    cards.push(<Card courseInfo={e.data()} id={e.id} key={index}></Card>);
    console.log(e.data());
  });

  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div>
      <header className="page-header">
        <NavigationBar />
      </header>
      <h1>my courses</h1>
      <br></br>
      <div className="results">{cards}</div>
    </div>
  );
}
