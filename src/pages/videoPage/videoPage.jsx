import React, { useState, useEffect } from "react";
import "./../../assets/styles/videoPage.css";
import YoutubeEmbed from "../../services/youtubeEmbed";
import { fireStore } from "../../services/firebase";
import { useParams } from "react-router-dom";
import NavigationBar from "./../../components/navComponent";
export default function VideoPage(props) {
  let [videos, setVideos] = useState([]);
  let [embedid, setEmbedid] = useState("");
  let [loading, setLoading] = useState(true);
  function handleClick(e) {
    setEmbedid(e.target.value);
  }

  let { id } = useParams();
  function lectureButtonFunc(videos) {
    return videos.map((d, index) => {
      console.log(d);
      return (
        <button value={d} name="embedid" onClick={handleClick} className="abtn">
          {`lecture ${index + 1}`}
        </button>
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
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    fetchData();
  }, []);
  if (loading) return <></>;
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
