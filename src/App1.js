import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import "./App1.css";
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Switch,
} from "react-router-dom";
import Route from "react-router-dom/Route";
import Sidepanel from "./Sidepanel";
import Home from "./Home";
import Navbar from "./Navbar";

class App1 extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/Sidepanel" component={Sidepanel} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}
ReactDOM.render(<App1 />, document.getElementById("root"));
export default App1;
