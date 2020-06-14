import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import firebase from './firebase';

class PdfUpload extends Component{
    constructor(props)
    {
        super(props);
        this.state={
           files:null
         }
       
    }
    handleChange=(files)=>{
        this.setState({
            files:files
        })

    }
    handleUpload=()=>{
        let bucketName='appliances'
        let file=this.state.files[0]
        //const {pdf}=this.state;
        let storageRef=firebase.storage().ref(`${bucketName}/${file.name}`)
        const UploadTask=storageRef.put(file);
        UploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        ()=>{
            let downloadURL=UploadTask.snapshot.downloadURL
        })

    }
    openpdf=()=>{
        let storageRef=firebase.storage().ref()
        let spaceRef=storageRef.child('appliances/'+this.state.files[0].name)
        storageRef.child('appliances/'+this.state.files[0].name).getDownloadURL().then((url)=>{
            console.log(url)
            
            window.location.href=url;
              
             
        })

    }
    render()
    {
        return(
           
            <div>
                <input type='file' onChange={(e)=>{this.handleChange(e.target.files)}}/>
                <button onClick={this.handleUpload}> upload </button>
                <button onClick={this.openpdf}> openlink </button>
                
                
            </div>
        )
    }
}
export default PdfUpload;