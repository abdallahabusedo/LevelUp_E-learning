import React, { useEffect, useState } from 'react';
import NavigationBar from "../../components/navComponent";
import "../../assets/styles/course.css"
import firebase from "../../services/firebase"
import "../../assets/styles/Form.css"
// import 'firebase/firestore';
import { useParams } from "react-router-dom";

export default function CourseCreator() {
    // course data , loading state and found or not state
    const ref = firebase.firestore().collection("courses");
    let [courseInfo, setCoureInfo] = useState({})

    function handleChange(event) {
        let name = event.target.name, value = event.target.value;
        let temp = courseInfo;

        temp[name] = value;
        setCoureInfo(temp);
    }

    function handleSubmit(event) {
        event.preventDefault();

        courseInfo["keyWords"] = String(courseInfo["keyWordsString"]).split(" ")
        courseInfo["keyWords"] = courseInfo["keyWords"].concat(courseInfo["courseName"].split(" "))
        console.log(courseInfo["keyWords"])
        ref.doc(courseInfo["courseName"]).get().then((value) => {

            if (!value.data())
                ref.doc(courseInfo["courseName"]).set(courseInfo);
            else
                console.log("course name is already taken")
        })

    }





    return (

            <div className="form-container">
              <NavigationBar />
              <h1> Signup </h1>
              <hr />

                <h1> Create Course </h1>
                <hr />
                <form name="createCourse" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Course Name</label>
                        <input type="text" required="" className="form-control" id="courseName" placeholder="Course Name" name="courseName" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Coures bio</label>
                        <input type="text" required="" className="form-control" id="courseBio" placeholder="Course bio" name="courseBio" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>key Words spearted by spaces</label>
                        <input type="text" className="form-control" id="keyWords" placeholder="key words" name="keyWordsString" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>link to youtube playlist</label>
                        <input type="text" className="form-control" id="playlist" placeholder="youtube playlist" name="playlist" onChange={handleChange} />
                    </div>
                    <div className="form-actions">
                        <input type="submit" value="Create Course" />
                    </div>
                </form>
            </div>
    );
}
