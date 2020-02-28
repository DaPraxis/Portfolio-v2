import React, { Component } from 'react';
import Header from './components/header.js';
import About from './components/about.js';
import Projects from './components/projects.js'
class App extends Component {

  render(){

    return (
      <div className="App">
        <Header/>
        <main>
          <div className="wrapper">
            <About/>
            <Projects/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
