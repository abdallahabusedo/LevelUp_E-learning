import React, { useState, useEffect } from "react";
import "./../../assets/styles/videoPage.css";
import YoutubeEmbed from "../../services/youtubeEmbed";
import { fireStore } from "../../services/firebase";
import { useParams } from "react-router-dom";
import NavigationBar from "./../../components/navComponent";
export default function VideoPage(props) {
  let [videos, setVideos] = useState([]);
  let [embedid, setEmbedid] = useState("");

  function handleClick(e) {
    console.log(e);
    setEmbedid((embedid = e.target.value));
  }

  let { id } = useParams();
  function lectureButtonFunc(videos) {
    return videos.map((d, index) => {
      console.log(d);
      return (
        <a value={d} name="embedid" onClick={handleClick} className="abtn">
          {`lecture ${index + 1}`}
        </a>
      );
    });
  }
  function fetchData() {
    const query = fireStore
      .collection("courses")
      .doc(id)
      .get()
      .then((data) => {
        setVideos((videos = data.get("videosID")));
        console.log(videos);
        setEmbedid((embedid = videos[0]));
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(query);
  }
  useEffect(() => {
    fetchData();
    console.log("asd", videos);
  });
  if (videos) {
    return (
      <div>
        <NavigationBar />
        <div className="flex-container">
          <div className="d1">
            <YoutubeEmbed embedId={embedid} />
          </div>
          <div className="d2">
            <div className="col" id="col">
              {lectureButtonFunc(videos)}
            </div>
          </div>
        </div>
      </div>
    );
  } else return <></>;
}
