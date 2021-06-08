import React, { Component } from "react";
import NavigationBar from "../../components/navComponent";
import homeBg from "./../../assets/Images/homeBG.jpg";
import "./../../assets/styles/home.css";
export default class Home extends Component {
  render() {
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

        <h1>Students are viewing</h1>
        
      </div>
    );
  }
}
