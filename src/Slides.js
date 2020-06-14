import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Slides extends React.Component {
  render() {
    return (
      <div>
        <div class="sliding">
          <Carousel showThumbs={false}>
            <div>
              <img src="../livingroompic.jpg" height="500px" width="500px" />
            </div>
            <div>
              <img src="../bedroompic.jpg" height="500px" width="500px" />
            </div>
            <div>
              <img src="../kitchenpic.jpg" height="500px" width="500px" />
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Slides;
