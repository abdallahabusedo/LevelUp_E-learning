import React, { Component } from "react";
import NavigationBar from "../../components/navComponent";
import homeBg from "./../../assets/Images/homeBG.jpg";
import "./../../assets/styles/home.css";
import python from "./../../assets/Images/python.png";
import gamer from "./../../assets/Images/gamer.jpg";
import thinking from "./../../assets/Images/thinking.jpg";
import { Link, useHistory } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <header className="page-header">
          <NavigationBar />
        </header>
        <div>
          <img src={homeBg} alt="Home" className="bg" />
          <h1 className="top-left">A large selection of courses</h1>
          <p className="top-left2">
            Choose from 10 online video courses with new additions published
            every month
          </p>
        </div>

        <div className="pageCourse">
          <h1 className="heading">Students are viewing</h1>

          <div className="row">
            <div className="column">
              <div className="card">
                <img src={python} className="cardImage" />
                <h1>python code</h1>
                <p>Deep Learning with PyTorch</p>
                <Link to="/course/Intro-to-Python-Livestream---Python-Basics-with-Sam">
                  <button className="goCoBTN">See the course page</button>
                </Link>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <img src={gamer} className="cardImage" />
                <h2>Create A 2D Game</h2>
                <p>Learn how to create a 2D game with Unreal Engine</p>
                <Link to="/course/Create-A-2.5D-Platformer-Game-With-Unreal-Engine-(Tutorial)">
                  <button className="goCoBTN">See the course page</button>
                </Link>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <img src={thinking} className="cardImage" />
                <h2>Computational Thinking</h2>
                <p>Learn the the basics of computational thinking</p>
                <Link to="/course/Computational-Thinking-&-Scratch">
                  <button className="goCoBTN">See the course page</button>
                </Link>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <img src={python} className="cardImage" />
                <h2>Intro to Python Livestream</h2>
                <p>Learn the basics of Python</p>
                <Link to="/course/Intro-to-Python-Livestream---Python-Basics-with-Sam">
                  <button className="goCoBTN">See the course page</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
