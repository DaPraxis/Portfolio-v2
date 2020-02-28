import React, { Component } from 'react';
import SocialMedia from './socialMedia.js'
import Navigation from './navigation.js'
class Header extends Component {
  render(){
    return (
        <header>
        <div className="wrapper">
            <Navigation/>
            <div className="titleText">
                <h1>
                    Max Jiang
                </h1>
                <h3>
                    Software/Machine Learning Engineer
                </h3>
                <h4>
                    <span className="work">Work</span>
                    <span className="play">Play</span>
                    <span className="live">Live</span>
                </h4>
            </div>
            <SocialMedia/>
        </div>
    </header>
    );
  }
}

export default Header;

