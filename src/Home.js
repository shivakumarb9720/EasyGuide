import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import Slides from "./Slides";
class Home extends React.Component {
  render() {
    return (
      <div class="bg">
        <div style={{ marginLeft: "550px" }}>
          <img src="../eglogo.png" height="90px" />
        </div>
        <div style={{ marginLeft: "450px" }}>
          <h2>Helps in usage of Appliances.</h2>
        </div>
        <Slides />
      </div>
    );
  }
}
export default Home;
