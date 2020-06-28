import React from "react";
import "./ImageComponent.css";
import "./style9.css";
import {
  Link,
  Element,
  DirectLink,
  ScrollElementProps,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import SUP from "./ScroolToUp.js"
//const wd={width:18};
function ImageComp(props) {
  const u=props.btnClick;

  console.log(props);
  function t(o){
    
    
  }
  
  function scrollTo() {
    // {props.btnName.props.btnClick()};
    
    scroller.scrollTo('myScrollToElement', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  return (
    
    <div className="col-md-4 col-sm-6 col-12">
      <div className="card rounded border-dark text-dark  ml-auto mr-auto  mb-5 mt-1">
       
        <div class="hovereffect">
            <img
              className="card-img-top img-fluid rounded-bottom"
              src={props.ImageUrl}
              alt={props.alt}
              name={props.imgName}
              onClick={props.imgClick}
              //{props.height1}

            />
            {/* <div class="mask mask-1"></div>
            <div class="mask mask-2"></div> */}
            <div class="overlay">

              <p>hi</p>
              <a role="button" name={props.imgName} onClick={props.imgClick} class="btn info" >PDF</a>
            </div>
          </div>
     
        <div>
        <div className="card-body">
          <h5 className="card-title">{props.imgInfo}</h5>
          <p className="card-text"></p>

          <Link
            to="myScrollToElement" containerId="containerElement"
                  >
          <button onClick={(props.btnClick)} type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2" name={props.btnName} className="btn text-light">
            
            Click Me
        
          </button>
        </Link>
        </div>
      </div>
      </div>
      
    </div>
    
    
    
  );
}
function Opentxt(props2){
  return(
    <div>
    <Element name="myScrollToElement" className="element">
      <div className="container pt-2">
          <div className="collapse text-area " id="multiCollapseExample2">
            <h2>{props2.data}</h2>
          </div>
          <SUP />
        </div>
    </Element>
    </div>
  );
}
export {ImageComp,Opentxt};