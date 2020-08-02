import React, { Component } from 'react'; //importing React js package, being used in the render method, from the node modules
import moment from 'moment'; //importing moment js package, being used in the render method, from the node modules
import ExampleComponent from './ExampleComponent' //importing file from same directory
import TestComponent from './TestComponent'

// Add your code own within the return statement

class App extends Component { //all the visible parts of our App is contained within this class, App is also the top-most level parent component
  render() {

    return (
      <div className="App">
        <header className="App-header">
          Now
        </header>
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax.
          JSX lets us include JavaScript functions right along with the HTML, and also
          allows us to add in components, which are separate, self-contained chunks of JSX.
        </p>
        <ExampleComponent />
        <TestComponent />

      </div>
    );
  }
}

export default App; //by using export we are allowing other files to import code from App
