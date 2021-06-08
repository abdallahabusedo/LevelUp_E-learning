import React, { Component, useState, useEffect } from "react";
import "./../../assets/styles/videoPage.css";
import YoutubeEmbed from "./../../services/youtubeEmbed";
import { fireStore, auth } from "./../../services/firebase";

class videoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["lecture 1", "lecture 1", "lecture 1", "lecture 1"],
      test: [],
      videos: [],
      embedid: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (e) => {
    console.log(e);
    this.setState({ embedid: e.target.value });
  };
  handleChange = (e) => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  };

  lectureButtonFunc = (videos) => {
    return videos.map((d, index) => {
      console.log(d);
      //console.log("d", this.state.embedid);
      return (
        <button value={d} name="embedid" onClick={this.handleClick}>
          {"lecture" + " " + (index + 1)}
        </button>
      );
    });
  };
  fetchData = () => {
    const query = fireStore
      .collection("courses")
      .doc("python-for-begginners")
      .get()
      .then((data) => {
        this.setState({ videos: data.get("videosID") });
        console.log(this.state.videos);
        this.setState({ embedid: this.state.videos[0] });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(query);
  };
  componentDidMount = () => {
    this.fetchData();
    console.log("asd", this.state.videos);
  };
  render() {
    if (this.state.videos) {
      return (
        <div>
          <div className="flex-container">
            <div className="d1">
              <YoutubeEmbed embedId={this.state.embedid} />
            </div>
            <div className="d2">
              <div className="col" id="col">
                {this.lectureButtonFunc(this.state.videos)}
              </div>
            </div>
          </div>
        </div>
      );
    } else return <></>;
  }
}

export default videoPage;
