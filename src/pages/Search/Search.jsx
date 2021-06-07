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
  const ref = firebase
    .firestore()
    .collection("courses")
    .where("keywords", "array-contains", id);
  function getSearchResults() {
    ref.get().then((Snapshot) => {
      setloading(false);
      if (Snapshot.empty) {
        return;
      }
      const items = [];
      Snapshot.forEach((doc) => {
        items.push(doc);
      });
      setResults(items);
    });
  }
  useEffect(() => {
    getSearchResults();
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
      <h1>search results</h1>
      <br></br>
      <div className="results">{cards}</div>
    </div>
  );
}
