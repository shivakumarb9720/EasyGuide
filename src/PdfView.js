import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Document, Page, pdfjs, pageNumber } from "react-pdf";
import firebase from "./firebase";
import { Link } from "react-router-dom";


class PdfView extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      mydata:null,
    }
   
   
  }
 
  dum=()=>{
  
    fetch('https://firebasestorage.googleapis.com/v0/b/easyguide-89a3.appspot.com/o/TVtxt.txt?alt=media&token=5319a73c-cb55-4b4f-9cf6-2bd11f065aa6')
    .then(
      (response)=>{
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
        // Examine the text in the response
        response.text().then((data)=> {
         
          this.setState({
            mydata: data
          });
          
        });
       
       
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

   

  }



  openTxt = (e) => {
    let storageRef = firebase.storage().ref();
    let spaceRef = storageRef.child( e.target.name);
    storageRef
      .child(e.target.name)
      .getDownloadURL()
      .then((url) => {

        fetch(url)
    .then(
      (response)=>{
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
        // Examine the text in the response
        response.text().then((data)=> {
         
          this.setState({
            mydata: data
          });
          
        });
       
       
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

   
       
       
         

        
      });
  };
 


  render() {
  
    
    return (
      
          <>
         
        <div>
      
     <button onClick={this.openTxt} name="chimneytxt.txt">pdftxt</button>
        <p>
          {this.state.mydata}
         
        </p>
        

       
       
  
         </div>
  
            
      
          
  
   </>
 
    );
  }
}
export default PdfView;

//ReactDOM.render(<PdfView/>, document.getElementById('root'));




/*
  <object width="100%" height="100%" data="https://firebasestorage.googleapis.com/v0/b/easyguide-89a3.appspot.com/o/appliances%2Fdesktop.pdf?alt=media&token=a13763e3-70f9-4b7a-b8b0-68a6398ac2f0
" type="application/pdf">   </object>



  <embed src="https://firebasestorage.googleapis.com/v0/b/easyguide-89a3.appspot.com/o/appliances%2Fdesktop.pdf?alt=media&token=a13763e3-70f9-4b7a-b8b0-68a6398ac2f0" type="application/pdf" width="100%" height="100%">
         
    </embed>



   componentDidMount() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }



  



                 <Document id="link"
            file="https://firebasestorage.googleapis.com/v0/b/easyguide-89a3.appspot.com/o/appliances%2Fdesktop.pdf?alt=media&token=a13763e3-70f9-4b7a-b8b0-68a6398ac2f0"
            onLoadSuccess={this.onDocumentLoadSuccess}
            
           type="text/plain"
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
         

 












*/