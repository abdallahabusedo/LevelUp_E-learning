import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "../assets/styles/nav.css";
import LevelUPImage from "./../assets/Images/levelUP-removebg-preview.png";
export default function NavigationBar(props) {
  const [searchVal, setSearchVal] = useState({ ser: "" });
  const hes = useHistory();
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setSearchVal({
      ...searchVal,
      ser: value,
    });
  };
  const handelSubmitSearch = (e) => {
    if (searchVal == "") hes.push("/home");
    else {
      console.log(searchVal.ser.split(" ").join("-"));
      hes.push("/search/" + searchVal.ser.split(" ").join("-"));
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
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}
