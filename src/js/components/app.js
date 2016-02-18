import React from "react";
import ReactDOM from "react-dom";
import messenger from "../composers/messenger";
import MapViewer from "./map-viewer";

class App extends React.Component {
  render() {
    return <MapViewer />;
    // return <div></div>;
  }
};

App = messenger( { target: App } );

export default App;
