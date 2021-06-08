import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles/nav.css";

export default class NavigationBar extends Component {
  
  render() {
    return (
      <div className="navbar-menu">
        <ul id="navbar-list">
            <li> <Link to="/home">Home</Link></li>
            <li> <Link to="/signup">Sign up</Link></li>
            <li> <Link to="/login">Login</Link></li>
        </ul>
      </div>
    )
  }
}
