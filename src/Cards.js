import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import Speech from "react-speech";
import firebase from "./firebase";
import { Document } from "react-pdf";
import { Router, Link } from "react-router-dom";
import style1 from "./SpeechStyle";

export default function Cards(props) {
    
      return (
        <div>
            <div class="col-lg-4">
              <img
                src={props.src}
                class={props.shape}
                width={props.width}
                height={props.height}
                onClick={props.click}
                name={props.name}
                alt={props.alt}
              />
            </div>
        </div>
      );
    
  }
 
