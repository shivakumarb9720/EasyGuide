import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Switch,
} from "react-router-dom";
import Route from "react-router-dom/Route";

class Navbar extends React.Component {
  render() {
    return (
      <div className="topnav">
        <Link to="/">Home</Link>
        <Link to="/Sidepanel">Sidepanel</Link>
        
      </div>
    );
  }
}
export default Navbar;
