import React, { Component } from 'react';
import Header from './components/header.js';
import About from './components/about.js';
import Projects from './components/projects.js'
import Experiences from './components/experiences.js'
class App extends Component {

  render(){

    return (
      <div className="App">
        <Header/>
        <main>
          <div className="wrapper">
            <About/>
            <Experiences/>
            <Projects/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
