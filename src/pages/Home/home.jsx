import React, { Component } from 'react';
import NavigationBar from "../../components/navComponent";
export default class Home extends Component {
  render() {
    return (
      <div> 
        <header className="page-header">
          <NavigationBar/>
        </header>
        <section>
          <div>
            <h1>A large selection of courses</h1>
            <p>Choose from 10 online video courses with new additions published every month</p>
          </div>

        </section>
      </div>
    )
  }
}
