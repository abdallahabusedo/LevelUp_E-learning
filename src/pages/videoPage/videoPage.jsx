import React, { Component } from "react";
import "./../../assets/styles/videoPage.css";
import YoutubeEmbed from "./../../services/youtubeEmbed";
class videoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["lecture 1", "lecture 1", "lecture 1", "lecture 1"],

      videos: [
        {
          id: 1,
          name: "lecture 1",
          embedId: "CNlj-uAiqmA",
        },
        {
          id: 2,
          name: "lecture 2",
          embedId: "iOauBgi9H1w",
        },
        {
          id: 3,
          name: "lecture 3",
          embedId: "k_yXgGfVXgs",
        },
      ],
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
      console.log("d", this.state.embedid);
      return (
        <button value={d.embedId} name="embedid" onClick={this.handleClick}>
          {d.name}
        </button>
      );
    });
  };
  componentDidMount = () => {
    // this.state.videos.map((d, index) => {
    //     var lectureButton = document.createElement("button");
    //     lectureButton.innerHTML = `${d.name}`;
    //     var myCurrentElement = document.getElementById("col");
    //     lectureButton.addEventListener("click",this.onClickLink(this.state.videos[index].embedId));
    //     myCurrentElement.insertAdjacentElement("beforeend", lectureButton);
    //    })
    this.setState({ embedid: this.state.videos[0].embedId });
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
