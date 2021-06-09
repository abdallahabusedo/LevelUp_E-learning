import React from "react";
import "../assets/styles/Card.css";
import { Link, useHistory } from "react-router-dom";
import c2 from "./../assets/Images/c2.jpg";
export default function Card(props) {
  return (
    <div className="row1">
      <div className="column1">
        <div className="card1">
          <img src={c2} className="cardImage1" />
          <h5>{props.courseInfo["name"]}</h5>
          <p> {props.courseInfo["bio"]}</p>
          <Link to={"/course/" + props.id}>
            <button className="goCoBTN1">See the course page</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
/**
 * <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div id="container">
        <div className="product-details">
          <h1>{props.courseInfo["name"]}</h1>
          <p className="bio"> {props.courseInfo["bio"]}</p>
        </div>

        <div className="product-image">
          <img
            src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign-europe.com/article/2019/11/06/cosmetics-consultants-europe-to-launch-safety-assessment-training-course-2020/10338859-1-eng-GB/Cosmetics-Consultants-Europe-to-launch-safety-assessment-training-course-2020_wrbm_large.jpg"
            alt=""
          />

          <a href={"http://localhost:3000/course/" + props.id}>
            <div className="info">
              <h2> go to course page</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
 */
