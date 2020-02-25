import React, { Component } from 'react';
import Header from './components/header.js';
import About from './components/about.js';
class App extends Component {

  render(){

    return (
      <div className="App">
        <Header/>
        <main>
          <div className="wrapper">
            <About/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
