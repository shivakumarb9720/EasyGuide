import React from "react";
import logo from "./eglogo.png";
import Slides from "./Slides";
class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <div className="container">
          <div className="row justify-content-md-center pt-3 pb-2">
            <div className="col-md-auto pd-3">
              <img src={logo} height="90px" alt="logo" />
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-md-auto pb-3">
              <h2>Helps in usage of Appliances.</h2>
            </div>
          </div>
        </div> */}
        <Slides />
      </div>
    );
  }
}
export default Home;
