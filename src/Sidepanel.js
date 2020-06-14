import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import Speech from "react-speech";
import firebase from "./firebase";
import { Document } from "react-pdf";
import { Router, Link } from "react-router-dom";

class Sidepanel extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.state = {
      mydata: null,
      // myText:"",
    };
  }

  style = {
    container: {
        width: '100%'
    },
    text: {
        width: '100%',
        display: ''
    },
    play: {
        hover: {
            backgroundColor: 'GhostWhite'
        },
        button: {
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            pointerEvents: 'none',
            
            backgroundColor: 'silver',
            border: 'solid 1px rgba(255,255,255,1)',
            borderRadius: 100
        }
    },
    stop: {
        hover: {
            backgroundColor: 'GhostWhite'
        },
        button: {
          
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            pointerEvents: 'none',
           
            backgroundColor: 'red',
            border: 'solid 1px rgba(255,255,255,1)',
            borderRadius: 500
        }
    },
    pause: {
        hover: {
            backgroundColor: 'GhostWhite'
        },
        button: {
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            pointerEvents: 'none',
            
            backgroundColor: 'rgb(233, 182, 14)',
            border: 'solid 1px rgba(255,255,255,1)',
            borderRadius: 500
        }
    },
    resume: {
        hover: {
            backgroundColor: 'GhostWhite'
        },
        button: {
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            pointerEvents: 'none',
           
            backgroundColor: 'green',
            border: 'solid 1px rgba(255,255,255,1)',
            borderRadius: 500
        }
    }
};



  openPdf = (e) => {
    let storageRef = firebase.storage().ref();
    let spaceRef = storageRef.child("appliances/" + e.target.name);
    storageRef
      .child("appliances/" + e.target.name)
      .getDownloadURL()
      .then((url) => {
        console.log(url);

        /*window.open( url, "_blank");*/

        window.location.href = url;
      });
  };

  openTxt = (e) => {
    let storageRef = firebase.storage().ref();
    let spaceRef = storageRef.child(e.target.name);
    storageRef
      .child(e.target.name)
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

  render() {
    return (
      <>
        <div class="container-fluid">
          <div class="bedroom" style={{ paddingBottom: "25px" }}>
            <div class="col-lg-4">
              <img
                src="https://m.economictimes.com/thumb/msid-72492526,width-1200,height-900,resizemode-4,imgsize-62483/untitled-design-2019-12-12t174123-286.jpg"
                class="rounded-circle"
                width="304"
                height="236"
                onClick={this.openPdf}
                name="AC.pdf"
              />
            </div>
            <div class="col-lg-4">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/71F5jycO8kL._SX466_.jpg"
                class="rounded-circle"
                width="306"
                height="236"
                onClick={this.openPdf}
                name="desktop.pdf"
              />
            </div>
            <div class="col-lg-4">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/815e4H%2BYBaL._AC_SX425_.jpg"
                class="rounded-circle"
                width="306"
                height="236"
                onClick={this.openPdf}
                name="musicsystem.pdf"
              />
            </div>
          </div>
          <br />
          <br />
          <div class="row">
            <div
              class="col-lg-4"
              style={{ marginTop: "30px", paddingLeft: "160px" }}
            >
              <button
                type="button"
                class="btn btn-secondary btn-lg"
                onClick={this.openTxt}
                name="ACtxt.txt"
              >
                AC
              </button>
            </div>
            <div
              class="col-lg-4"
              style={{ marginTop: "30px", paddingLeft: "130px" }}
            >
              <button
                type="button"
                class="btn btn-secondary btn-lg"
                onClick={this.openTxt}
                name="desktoptxt.txt"
              >
                Desktop
              </button>
            </div>
            <div
              class="col-lg-4"
              style={{ marginTop: "30px", paddingLeft: "110px" }}
            >
              <button
                type="button"
                class="btn btn-secondary btn-lg"
                onClick={this.openTxt}
                name="musicsystemtxt.txt"
              >
                MusicSystem
              </button>
            </div>
          </div>

          <div class="kitchen" style={{ paddingBottom: "25px" }}>
            <div class="col-lg-4">
              <img
                src="https://5.imimg.com/data5/LM/BX/OA/SELLER-28539620/fobco-shine-kitchen-chimney-500x500.jpg"
                class="rounded"
                width="306"
                height="236"
                onClick={this.openPdf}
                name="chimney.pdf"
              />
            </div>
            <div class="col-lg-4">
              <img
                src="https://content.jdmagicbox.com/quickquotes/images_main/bajaj-maverick-750-watt-mixer-grinder-with-3-jars-food-processor-bowl-and-coconut-scraper-178080464-cenjq.jpg"
                class="rounded"
                width="306"
                height="236"
                onClick={this.openPdf}
                name="mixergrinder.pdf"
              />
            </div>
            <div class="col-lg-4">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/618O0ywM1SL._SX425_.jpg"
                class="rounded"
                width="306"
                height="236"
                onClick={this.openPdf}
                name="oven.pdf"
              />
            </div>
          </div>

          <div class="row">
            <div
              class="col-lg-4"
              style={{ marginTop: "30px", paddingLeft: "160px" }}
            >
              <button
                type="button"
                class="btn btn-secondary btn-lg"
                onClick={this.openTxt}
                name="chimneytxt.txt"
              >
                Chimney
              </button>
            </div>
            <div
              class="col-lg-4"
              style={{ marginTop: "30px", paddingLeft: "130px" }}
            >
              <button
                type="button"
                class="btn btn-secondary btn-lg"
                onClick={this.openTxt}
                name="mixergrindertxt.txt"
              >
                MixerGrinder
              </button>
            </div>
            <div
              class="col-lg-4"
              style={{ marginTop: "30px", paddingLeft: "110px" }}
            >
              <button
                type="button"
                class="btn btn-secondary btn-lg"
                onClick={this.openTxt}
                name="oventxt.txt"
              >
                Oven
              </button>
            </div>
          </div>

          <div class="livingroom" style={{ paddingBottom: "25px" }}>
            <div class="col-lg-4">
              <img
                src="https://cdn.shopify.com/s/files/1/2660/5106/products/39119106_URK0_HC_3377d632-8013-4d4d-a4e6-7e6dc47fcfd5_1400x.jpg?v=1571710931"
                class="rounded-circle"
                width="306"
                height="236"
                onClick={this.openPdf}
                name="TV.pdf"
              />
            </div>
            <div class="col-lg-4">
              <img
                src="https://inception-app-prod.s3.amazonaws.com/ODI5MjVhZDItNDQ3NC00ZmIwLTg3NDktZTU5YTA3MTkzY2E0/content/2018/01/lighting.jpg"
                class="rounded-circle"
                width="306"
                height="236"
                onClick={this.openPdf}
                name="lighting.pdf"
              />
            </div>
            <div class="col-lg-4">
              <img
                src="https://st2.depositphotos.com/7472576/11437/v/950/depositphotos_114375724-stock-illustration-chrome-modern-fridge.jpg"
                class="rounded-circle"
                width="306"
                height="236"
                onClick={this.openPdf}
                name="fridge.pdf"
              />
            </div>
          </div>

          <div class="row">
            <div
              class="col-lg-4"
              style={{ marginTop: "30px", paddingLeft: "160px" }}
            >
              <button
                type="button"
                class="btn btn-secondary btn-lg"
                onClick={this.openTxt}
                name="TVtxt.txt"
              >
                TV
              </button>
            </div>
            <div
              class="col-lg-4"
              style={{ marginTop: "30px", paddingLeft: "130px" }}
            >
              <button
                type="button"
                class="btn btn-secondary btn-lg"
                onClick={this.openTxt}
                name="lightingtxt.txt"
              >
                Lighting
              </button>
            </div>
            <div
              class="col-lg-4"
              style={{ marginTop: "30px", paddingLeft: "110px" }}
            >
              <button
                type="button"
                class="btn btn-secondary btn-lg"
                onClick={this.openTxt}
                name="fridgetxt.txt"
              >
                Fridge
              </button>
            </div>
          </div>
        </div>
        <br />

        <div className="Speech" style={{ paddingLeft: "550px"}}>
          <Speech
          styles={this.style}
            text={this.state.mydata}
            textAsButton="true"
           displayText="PLAY"
            stop="true"
            pause="true"
            resume="true"
          />
        </div>
        <br/>
        <div class="container-fluid1">
          <div>
            <h2>{this.state.mydata}</h2>
          </div>
        </div>
      </>
    );
  }
}
//ReactDOM.render(<Sidepanel/>, document.getElementById('root'));
export default Sidepanel;
