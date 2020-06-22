import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import s1 from "./livingroompic.jpg";
import s2 from "./bedroompic.jpg";
import s3 from "./kitchenpic.jpg";
import "./slides.css";

class Slides extends React.Component {
  render() {
    return (
      <div>
        <div
          id="demo"
          class="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active" />
            <li data-target="#demo" data-slide-to="1" />
            <li data-target="#demo" data-slide-to="2" />
          </ul>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="overlay">
                <img src={s1} alt="Los Angeles" height="600px" width="600px" />
              </div>
              <div class="carousel-caption">
                <h1>Living Room</h1>
                {/* <p>We had such a great time in LA!</p> */}
              </div>
            </div>
            <div class="carousel-item">
              <img src={s2} alt="Chicago" height="600px" width="600px" />
              <div class="carousel-caption">
                <h1>Bedroom</h1>
                {/* <p>Thank you, Chicago!</p> */}
              </div>
            </div>
            <div class="carousel-item">
              <img src={s3} alt="New York" height="600px" width="600px" />
              <div class="carousel-caption">
                <h1>Kitchen</h1>
                {/* <p>We love the Big Apple!</p> */}
              </div>
            </div>
          </div>
          <a class="carousel-control-prev " href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon btn-dark" />
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon" />
          </a>
        </div>
      </div>
    );
  }
}

export default Slides;
