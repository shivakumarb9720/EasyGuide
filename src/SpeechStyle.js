import { ImageIcon } from "@primer/octicons-react";

const style1 = {
    container: {
      width: "100%"
    },
    text: {
      width: "100%",
      display: ""
    },
    play: {
      hover: {
        backgroundColor: "GhostWhite"
      },
      button: {
        width: "60px",
        height: "60px",
        cursor: "pointer",
        pointerEvents: "none",
  
        backgroundColor: "green",
        border: "solid 1px rgba(255,255,255,1)",
        borderRadius: 100
      }
    },
    stop: {
      hover: {
        backgroundColor: "GhostWhite"
      },
      button: {
        width: "50px",
        height: "50px",
        cursor: "pointer",
        pointerEvents: "none",
  
        backgroundColor: "red",
        border: "solid 1px rgba(255,255,255,1)",
        borderRadius: 500
      }
    },
    pause: {
      hover: {
        backgroundColor: "GhostWhite"
      },
      button: {
        width: "50px",
        height: "50px",
        cursor: "pointer",
        pointerEvents: "none",
        
        backgroundColor: "rgb(233, 182, 14)",
        border: "solid 1px rgba(255,255,255,1)",
        borderRadius: 500
      }
    },
    resume: {
      hover: {
        backgroundColor: "GhostWhite"
      },
      button: {
        width: "50px",
        height: "50px",
        cursor: "pointer",
        pointerEvents: "none",
        backgroundColor: "silver",
        borderColor: "solid 1px rgba(255,255,255,1)",
        outline: 'none',
        borderRadius: 500
       
      }
    }
  };
  
  export default style1;
  