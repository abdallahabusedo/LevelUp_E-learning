import React, { useEffect, useState } from 'react';
import "../assets/styles/Card.css"

export default function Card(props) {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div id="container">

                <div class="product-details">

                    <h1>{props.courseInfo["courseName"]}</h1>


                    <p class="information">" {props.courseInfo["courseBio"]}</p>





                </div>

                <div class="product-image">

                    <img src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />


                    <div class="info">
                        <h2> go to course</h2>

                    </div>
                </div>

            </div>

        </div>
    )
}


