import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App1 from "./App1";
import PdfView from "./PdfView";
import * as serviceWorker from "./serviceWorker";
import PdfUpload from "./PdfUpload";
import Dum from "./Dum";
import ReadAloud from "./ReadAloud";
import Sidepanel from "./Sidepanel";

ReactDOM.render(
  <React.StrictMode>
    <App1/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();