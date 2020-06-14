import React, { Component } from "react";
import { Document, Page, pdfjs, pageNumber } from "react-pdf";
import firebase from "./firebase";



class Dum extends Component {
 
  handleClick = () => {

    fetch('https://firebasestorage.googleapis.com/v0/b/easyguide-89a3.appspot.com/o/appliances%2Ffridge%20decode.txt?alt=media&token=91cb328a-2664-4d54-9037-f49948872259')
    .then((r) => r.text())
    .then(text  => {
      console.log(text);
    })  
  } 
    render() {
   
    
        return (
          <>

              <button onClick={this.handleClick}> open </button>  

         </>

        );
          }    
}
export default Dum;


/*
(async () => {
	const response = await fetch('https://github.com/');
	const body = await response.text();

	console.log(body);
})();
*/