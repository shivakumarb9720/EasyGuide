import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./Navigation.css";
import {ListUnorderedIcon } from '@primer/octicons-react'
import ttl from "./Capture.PNG";
import ttl1 from "./Capture4.PNG";

export default function Navbar1() {
  return (
    <div>
      <nav className="navbar  /*fixed-top navbar-expand-md */  ">
        <Navbar.Brand>
        <div className="webhead">
          <Link to="/" >
            <img src={ttl1} className=" rounded" height="50px" shape="rounded"></img>
          </Link>
          </div>
        </Navbar.Brand>
        <button
          className="navbar-toggler "
          type="button "
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          
          <ListUnorderedIcon size='medium' />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav pr-5 ml-auto mt-2 mt-lg-0">
            <li className="nav-item active pl-4 ml-4">
              <Link className="nav-link " to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            {/* <li className="nav-item pl-4 ml-4"> 
              <Link> className="nav-link" to="/About">
                About
              </Link>
            </li>*/}
            <li className="nav-item pl-4 ml-4"> 
              <Link className="nav-link" to="/Sidepanel">
                Appliances
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

