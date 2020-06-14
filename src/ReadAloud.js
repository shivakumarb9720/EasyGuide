import React from "react";
import "./App.css";
import firebase from "./firebase";
import Speech from "react-speech";

class ReadAloud extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.state = {
      myText: "",
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
            width: '30',
            height: '30',
            cursor: 'pointer',
            pointerEvents: 'none',
            outline: 'none',
            backgroundColor: 'red',
            border: 'solid 1px rgba(255,255,255,1)',
            borderRadius: 6
        }
    },
    stop: {
        hover: {
            backgroundColor: 'GhostWhite'
        },
        button: {
          
            width: '34',
            height: '34',
            cursor: 'pointer',
            pointerEvents: 'none',
            outline: 'none',
            backgroundColor: 'cyan',
            border: 'solid 1px rgba(255,255,255,1)',
            borderRadius: 6
        }
    },
    pause: {
        hover: {
            backgroundColor: 'GhostWhite'
        },
        button: {
            width: '34',
            height: '34',
            cursor: 'pointer',
            pointerEvents: 'none',
            outline: 'none',
            backgroundColor: 'blue',
            border: 'solid 1px rgba(255,255,255,1)',
            borderRadius: 6
        }
    },
    resume: {
        hover: {
            backgroundColor: 'GhostWhite'
        },
        button: {
            width: '34',
            height: '34',
            cursor: 'pointer',
            pointerEvents: 'none',
            outline: 'none',
            backgroundColor: 'Green',
            border: 'solid 1px rgba(255,255,255,1)',
            borderRadius: 6
        }
    }
};

  dum = () => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/easyguide-89a3.appspot.com/o/fridgetxt.txt?alt=media&token=719e3fb2-ca36-45e6-8f3e-3dec349e61fb"
    )
      .then((response) => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        // Examine the text in the response
        response.text().then((data) => {
          this.setState({
            myText: data,
          });
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  };

  render() {
    return (
      
      <div className="App">
        
        <Speech
        styles={this.style}
          text={this.state.myText}
          textAsButton="true"
          stop="true"
          pause="true"
          resume="true"
          displayText="Read Aloud!"
        />
        
        <button onClick={this.dum}>pdf</button>

        <p ref={this.myRef}>{this.state.myText}</p>
      </div>
    );
  }
}

export default ReadAloud;

/*https://firebasestorage.googleapis.com/v0/b/easyguide-89a3.appspot.com/o/appliances%2FTVtxt.txt?alt=media&token=4e429530-807e-46ae-8d9a-21921b26fdfa




*/
