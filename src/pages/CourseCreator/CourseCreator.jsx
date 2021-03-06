import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavigationBar from "../../components/navComponent";
import "../../assets/styles/course.css";
import firebase, { fireStore } from "../../services/firebase";
import "../../assets/styles/Form.css";
import "../../assets/styles/coursecreator.css";
// import 'firebase/firestore';
//import { useParams } from "react-router-dom";
//import CourseImage from '../../components/CourseImage';
import youtube from "../../services/youtubeplaylist";
//import url from 'url';
import { useAuth } from "../../services/authContext";
export default function CourseCreator(props) {
  // course data , loading state and found or not state
  const ref = fireStore.collection("courses");
  const history = useHistory();
  let [courseInfo, setCoureInfo] = useState({});
  let [formStates, setFormStates] = useState({});
  // let [reload, setreload] = useState();
  const { currentUser } = useAuth();

  useEffect(() => {
    fireStore
      .collection("users")
      .doc(currentUser.uid)
      .onSnapshot((doc) => {
        if (doc.exists) {
          if (doc.data().Credentials === "Student")
            history.push("/user/profile");
        }
      });
  }, [currentUser]);
  function handleChange(event) {
    let name = event.target.name,
      value = event.target.value;
    let temp = courseInfo;

    temp[name] = value;
    setCoureInfo(temp);
  }
  function addvediosID(playlistId) {
    let vidoesId = [];
    const req = youtube.get("/playlistItems", {
      params: {
        playlistId: playlistId,
        maxResults: 50,
      },
    });
    req.then((res) => {
      res.data.items.map((video) =>
        vidoesId.push(video.contentDetails.videoId)
      );
      console.log(res.data.items);
    });
    return vidoesId;
  }
  function handleSubmit(event) {
    let currentformstates = {};

    event.preventDefault();
    let notCompleted = false;
    if (!courseInfo["name"] || courseInfo["name"] === "") {
      currentformstates["nameNotEntered"] = true;
      notCompleted = true;
    }
    if (!courseInfo["bio"] || courseInfo["bio"] === "") {
      currentformstates["bioNotEntered"] = true;
      notCompleted = true;
    }
    if (!courseInfo["playlist"] || courseInfo["playlist"] === "") {
      currentformstates["playlistNotEntered"] = true;
      notCompleted = true;
    }

    if (notCompleted) {
      setFormStates(currentformstates);
      return;
    }
    courseInfo["keywords"] = String(courseInfo["keyWordsString"]).split(" ");
    courseInfo["keywords"] = courseInfo["keywords"].concat(
      courseInfo["name"].split(" ")
    );
    let playlisturl = new URL(courseInfo["playlist"]);
    courseInfo["videosID"] = addvediosID(playlisturl.searchParams.get("list"));
    courseInfo["instractorMail"] = currentUser.email;

    ref
      .doc(String(courseInfo["name"]).split(" ").join("-"))
      .get()
      .then((value) => {
        if (!value.data()) {
          ref
            .doc(String(courseInfo["name"]).split(" ").join("-"))
            .set(courseInfo);
          props.history.push(
            "/course/" + String(courseInfo["name"]).split(" ").join("-")
          );
        } else {
          currentformstates["nameIsTaken"] = true;
        }
        setFormStates(currentformstates);
      });
  }

  return (
    <div className="form-container">
      <NavigationBar />
      <h1> Create Course </h1>
      <hr />
      <form name="createCourse" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Course Name</label>

          <input
            type="text"
            required=""
            className="form-control"
            id="name"
            placeholder="Course Name"
            name="name"
            onChange={handleChange}
          />
          {formStates["nameIsTaken"] && (
            <label className="warnning">name is already taken</label>
          )}
          {formStates["nameNotEntered"] && (
            <label className="warnning">required</label>
          )}
        </div>
        <div className="form-group">
          <label>Coures bio</label>
          <input
            type="text"
            required=""
            className="form-control"
            id="bio"
            placeholder="Course bio"
            name="bio"
            onChange={handleChange}
          />
          {formStates["bioNotEntered"] && (
            <label className="warnning">required</label>
          )}
        </div>
        <div className="form-group">
          <label>key Words spearted by spaces</label>
          <input
            type="text"
            className="form-control"
            id="keywords"
            placeholder="key words"
            name="keyWordsString"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>content</label>
          <input
            type="textArea"
            className="form-control"
            id="content"
            placeholder="course content"
            name="content"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>link to youtube playlist</label>
          <input
            type="text"
            className="form-control"
            id="playlist"
            placeholder="youtube playlist"
            name="playlist"
            onChange={handleChange}
          />
          {formStates["playlistNotEntered"] && (
            <label className="warnning">required</label>
          )}
        </div>
        {/* <CourseImage /> */}
        <div className="form-actions">
          <input type="submit" value="Create Course" />
        </div>
      </form>
    </div>
  );
}
