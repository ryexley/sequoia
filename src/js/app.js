import React from "react";
import messenger from "./composers/messenger";

class App extends React.Component {
  componentWillMount() {
    this.startWiretap( {} );
    this.subscribe( { topic: "something.happened", handler: this.handleSomethingHappened } );
    this.publish( "something.happened", { message: "Main app module initialized" } );
  }

  handleSomethingHappened( data, env ) {
    console.log( "HANDLING!!", env );
  }

  render() {
    return <h1>Sequoia - a mapping application</h1>;
  }
};

App = messenger( { target: App } );

export default App;
