import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add(faGithub, faTwitter, faLinkedinIn); 

class Header extends Component {
  render(){
    return (
        <header>
        <div className="wrapper">
            <div className="navigation clearfix">
                <span>HJ</span>
                <nav>
                    <ul>
                        <li>
                            <a href="#">HOME</a>
                        </li>
                        <li>
                            <a href="#about">ABOUT</a>
                        </li>
                        <li>
                            <a href="#experience">EXPERIENCES</a>
                        </li>
                        <li>
                            <a href="#projects">PROJECTS</a>
                        </li>
                        <li>
                            <a href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </nav>
            </div>
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


            <div className="socialMedia">
                <ul>
                    <li>
                        <a href="https://github.com/DaPraxis">
                            {/* <i className="fab fa-github"></i> */}
                            <FontAwesomeIcon icon={['fab', 'github']} />
                            <span className="visuallyhidden">github</span>
                        </a>
                    </li>
            
                    <li>
                        <a href="https://twitter.com/Max15595598">
                            {/* <i className="fab fa-twitter"></i> */}
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                            <span className="visuallyhidden">Twitter</span>
                        </a>
                    </li>
            
                    <li>
                        <a href="https://www.linkedin.com/in/haoyan-jiang">
                            {/* <i className="fab fa-linkedin-in"></i> */}
                            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                            <span className="visuallyhidden">Linkedin</span>
                        </a>
                    </li>
            
                    <li>
                        <a href="mailto:haoyanhy.jiang@mail.utoronto.ca">
                            {/* <i className="far fa-envelope"></i> */}
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span className="visuallyhidden">email to</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    );
  }
}

export default Header;

