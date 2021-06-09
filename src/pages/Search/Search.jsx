import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/navComponent";
import "../../assets/styles/Search.css";

import "firebase/firestore";

import firebase from "../../services/firebase";
import { useParams } from "react-router-dom";

import Card from "../../components/Card";
export default function Search() {
  let { id } = useParams();

  const [results, setResults] = useState([]);
  const [loading, setloading] = useState(true);

  function getSearchResults() {
    let coursesNames = {};
    let words = id.split("-");
    for (let i = 0; i < words.length; i++) {
      console.log(words[i]);
      const ref = firebase
        .firestore()
        .collection("courses")
        .where("keywords", "array-contains", words[i]);
      ref.get().then((Snapshot) => {
        if (Snapshot.empty) {
          return;
        }
        const items = [];
        Snapshot.forEach((doc) => {
          if (!coursesNames[doc.data().name]) {
            items.push(doc);
            coursesNames[doc.data().name] = true;
          }
        });
        setResults(results.concat(items));
      });
    }
  }

  useEffect(() => {
    getSearchResults();
    setTimeout(() => setloading(false), 1000);
  }, []);
  let cards = [];

  results.map((e, index) =>
    cards.push(<Card courseInfo={e.data()} id={e.id} key={index}></Card>)
  );
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div>
      <header className="page-header">
        <NavigationBar />
      </header>
      <h1 className="heading">search results</h1>
      <br></br>
      <div className="results">{cards}</div>
    </div>
  );
}
