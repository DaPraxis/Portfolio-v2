import React, { Component } from 'react';
import Header from './components/header.js';
import About from './components/about.js';
import Projects from './components/projects.js'
import Experiences from './components/experiences.js'
import Fade from 'react-reveal/Fade';
import Form from './components/Contact'
class App extends Component {

  render(){

    return (
      <div className="App">
        <Header/>
        <main>
          <div className="wrapper">
            <Fade>
              <About/>
              <Experiences/>
              <Projects/>
              <Form/>
            </Fade>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
