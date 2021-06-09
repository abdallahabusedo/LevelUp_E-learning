import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../assets/styles/nav.css";
import { useAuth } from "./../services/authContext";
import LevelUPImage from "./../assets/Images/levelUP-removebg-preview.png";
export default function NavigationBar(props) {
  const [searchVal, setSearchVal] = useState({ ser: "" });
  const hes = useHistory();
  const handleInputChange = (e) => {
    let { value } = e.target;

    setSearchVal({
      ...searchVal,
      ser: value.toLowerCase(),
    });
  };
  const { currentUser } = useAuth();
  const handelSubmitSearch = (e) => {
    if (searchVal.ser === "") hes.push("/");
    else {
      hes.push("/search/" + searchVal.ser.split(" ").join("-"));
      window.location.reload();
    }
  };

  return (
    <div className="navbar-menu">
      <ul id="navbar-list">
        <li>
          <Link to="/home" className="LOGO">
            <img src={LevelUPImage} alt="logo" className="logoPhoto"></img>
          </Link>
        </li>
        <li>
          <div className="example">
            <input
              placeholder="Search.."
              onChange={handleInputChange}
              type="text"
            />
            <button type="submit" onClick={handelSubmitSearch}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/signup" className={currentUser ? "dd" : "hh"}>
            Sign up
          </Link>
        </li>
        <li>
          <Link to="/login" className={currentUser ? "dd" : "hh"}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/mycourses" className={currentUser ? "hh" : "dd"}>
            MyCourses
          </Link>
        </li>
        <li>
          <Link to="/user/profile" className={currentUser ? "hh" : "dd"}>
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}
