import React, { Component } from "react";
import "./../../assets/styles/videoPage.css";
import YoutubeEmbed from "./../../services/youtubeEmbed";
class videoPage extends Component {
  render() {
    return (
      <div>
        <div className="flex-container">
          <div className="d1">
            <YoutubeEmbed embedId="rokGy0huYEA" />
          </div>
          <div className="d2">
            <p>part two </p>
          </div>
        </div>
      </div>
    );
  }
}

export default videoPage;
