import React, { useEffect, useState } from 'react';
import NavigationBar from "../../components/navComponent";
import "../../assets/styles/course.css"
import firebase from "../../services/firebase"
// import 'firebase/firestore';
import { useParams } from "react-router-dom";
// import { getplaylist } from "../../services/youtubeplaylist";
// import { google } from "googleapis";
// function getplaylist() {
//     google.youtube("v3").playlistItems.list({
//         "part": [
//             "contentDetails"
//         ],
//         "playlistId": "PL4cUxeGkcC9gC88BEo9czgyS72A3doDeM"
//     }).then(res => {
//         console.log(res);
//     });
// };


// Make sure the client is loaded and sign-in is complete before calling this method.

export default function Course() {
    // course data , loading state and found or not state
    const [course, setCourse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const ref = firebase.firestore().collection("courses");


    // get course id from the url 
    let { id } = useParams();



    // retrive course data 
    function getCourseData() {
        console.log(id)


        ref.where(firebase.firestore.FieldPath.documentId(), '==', id).get().then((Snapshot) => {
            if (Snapshot.empty) {

                setNotFound(true);
                setLoading(false);
                return;
            }

            const items = [];
            Snapshot.forEach(doc => {
                items.push(doc.data())

            });

            setCourse(items);
            setLoading(false);



        })



    }

    useEffect(() => {
        getCourseData();
        // console.log(getplaylist())
    }, []);


    let enrolled = true;


    let button;

    // enroll button 
    if (enrolled) {
        button = <h4><span class="badge bg-light text-dark">enrolled</span></h4>
    } else {
        button = <button type="button" class="btn btn-dark ">enroll</button>
    }
    if (loading) {
        return <div></div>;
    }
    // if the course not found display 404 not found
    if (notFound) {
        return (
            <div>
                <header className="page-header" >
                    <NavigationBar />
                </header>
                <section>
                    <div className="not-found">Oops! That course doesn’t exist .</div>
                </section>
            </div>);
    }
    return (

        <div>
            <header className="page-header" >
                <NavigationBar />
            </header>
            <section>
                <div>
                    <div className="course-wallpaper" style={{ "background-color": "coral" }}>
                        <div className="course-name">{course[0]["name"]}</div>
                        <div className="course-bio"><p>{course[0]["bio"]}</p>

                        </div>
                        {/* <div class="card" >
                            <img class="card-img-top" src="https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat-800x445.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div> */}
                        <div className="enrollment-button">
                            {button}
                        </div>
                    </div>
                    <div className="course-info">
                        <h4>course content</h4>
                        <p>{course[0]["content"]}</p>
                        <div className="course-instractors">

                            {

                                // course[0]["instructors"].map((instructor) => {
                                //     return <h4>{instructor}</h4>
                                // })
                            }

                        </div>
                    </div>

                </div>
            </section>
        </div >
    );
}
