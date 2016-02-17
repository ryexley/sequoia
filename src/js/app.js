import React from "react";
import messenger from "./composers/messenger";

class App extends React.Component {
  componentWillMount() {}

  render() {
    return <h1>Sequoia - a mapping application</h1>;
  }
};

App = messenger( { target: App } );

export default App;
