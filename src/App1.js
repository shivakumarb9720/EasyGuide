import React from "react";
import ReactDOM from "react-dom";
//import { Component } from "react";
//import "./App1.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import Sidepanel from "./Sidepanel.js";
import Home from "./Home.js";
import Navbar1 from "./Navbar.js";

class App1 extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar1 />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Sidepanel" component={Sidepanel} />
          </Switch>
        </div>
      </Router>
    );
  }
}
ReactDOM.render(<App1 />, document.getElementById("root"));
export default App1;
