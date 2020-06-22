import React from "react";
import "./ImageComponent.css";

//const wd={width:18};
export default function ImageComp(props) {
  console.log(props);
  return (
    
    <div className="col-md-4 col-sm-6 col-12">
      <div className="card rounded border-dark text-dark  ml-auto mr-auto  mb-5 mt-1">
       
        <div class="hovereffect">
            <img
              className="card-img-top img-fluid rounded"
              src={props.ImageUrl}
              alt={props.alt}
              name={props.imgName}
              onClick={props.imgClick}
              //{props.height1}

            />
            <div class="overlay">
              <h3 ></h3>
              <a role="button" name={props.imgName} onClick={props.imgClick} class=" btn info" >PDF</a>
            </div>
          </div>
     
        <div>
        <div className="card-body">
          <h5 className="card-title">{props.imgInfo}</h5>
          <p className="card-text"></p>
          <button onClick={props.btnClick} type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2" name={props.btnName} className="btn text-light">
            Click Me
          </button>
        </div>
      </div>
      </div>
    </div>
    
    
    
  );
}
