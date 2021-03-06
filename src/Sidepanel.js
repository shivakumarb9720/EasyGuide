import React from "react";
import Speech from "react-speech";
import firebase from "./firebase";
import style1 from "./SpeechStyle";
import Card from "./CardUrls.js";
import "./Sidepanel.css";
import {Opentxt, ImageComp} from "./ImageComponent.js";

class Sidepanel extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.state = {
      mydata: null,
      // myText:"",
    };
  }
  


  openPdf = (e) => {
    let storageRef = firebase.storage().ref();
    //let spaceRef = storageRef.child("appliances/" + e.target.name);
    storageRef
      .child("appliances/" + e.target.name)
      .getDownloadURL()
      .then((url) => {
        console.log(url);

        window.open( url, "_blank");

        //window.location.href = url;
      });
  };

  openTxt = (e) => {
    let storageRef = firebase.storage().ref();
    //let spaceRef = storageRef.child(e.target.name);
    
    storageRef
      .child(e.target.getAttribute('name'))
      .getDownloadURL()
      .then((url) => {
        fetch(url)
          .then((response) => {
            if (response.status !== 200) {
              console.log(
                "Looks like there was a problem. Status Code: " +
                  response.status
              );
              return;
            }

            // Examine the text in the response
            response.text().then((data) => {
              this.setState({
                mydata: data,
              });
            });
          })
          .catch(function (err) {
            console.log("Fetch Error :-S", err);
          });
      });
  };

   createImgcomp(props1) {
    return (
      <ImageComp
        key={props1.id}
        imgName={props1.name}
        btnName={props1.textName}
        ImageUrl={props1.src1}
        
        alt={props1.alt}
        imgClick={this.openPdf}
        btnClick={this.openTxt}
        imgInfo={props1.ImageInfo}
      />
    );
  }

  render() {
    return (
      <>
        <div className="container-fluid ">
          <div class="alert alert-info mt-3" role="alert">
          <strong style={{color:"black"}}>Note: </strong>For PDF press on the Image and for text press on "Click Me" button.
          </div>

          <div className="Imagepage">
            <div className="container mb-4 mt-5">
              <div className="row ">{Card.map(i => (this.createImgcomp(i)))}
              </div>
          </div>
          </div>
          
        </div>
        <br />
        <div className="container">
          
          <div className="row justify-content-md-center pt-3 pb-2">
            <div className="col-md-auto">
              <div className="Speech" >
                <Speech
                  styles={style1}
                  text={this.state.mydata}
                  textAsButton="true"
                  displayText="Start"
                  stop="true"
                  pause="true"
                  resume="true"
                />
              </div>
            </div>
          </div>
          <div style={{paddingLeft:"170px",fontWeight:"bold"}}>Play</div>
        </div>
        <br/>
        {/* <Element name="test1" className="element"> 
           */}
       
       <div>
       <Opentxt data={this.state.mydata}/>
        </div>
        
        

      </>
    );
  }
}

export default Sidepanel;

