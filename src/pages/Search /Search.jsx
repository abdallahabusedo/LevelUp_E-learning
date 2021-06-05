import React, { useEffect, useState } from 'react';
import NavigationBar from "../../components/navComponent";
import "../../assets/styles/Search.css"

import 'firebase/firestore';

import firebase from "../../services/firebase"
import { useParams } from "react-router-dom";

import Card from "../../components/Card"
export default function Search() {
    const ref = firebase.firestore().collection("courses");
    const [results, setResults] = useState([])
    const [loading, setloading] = useState(true)

    let { id } = useParams();
    function getSearchResults() {

        ref.where('keyWords', 'array-contains', id).get().then((Snapshot) => {
            setloading(false)
            if (Snapshot.empty) {

                return;
            }
            let tempResults = []
            Snapshot.forEach(doc => {
                tempResults.push(doc.data)
            });
            setResults(tempResults)


        })



    }
    useEffect(() => {

        getSearchResults();
    });
    let cards = []
    results.map(e => cards.push(<Card courseInfo={e}></Card>))
    if (loading) {
        return (<div>loading</div>);
    }
    return (

        <div>
            <header className="page-header" >
                <NavigationBar />
            </header>
            <div className="results">
                {cards}
            </div >
        </div >
    );
}
