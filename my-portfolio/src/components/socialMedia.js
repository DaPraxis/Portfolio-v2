import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add(faGithub, faTwitter, faLinkedinIn);

class SocialMedia extends Component{
    render(){

        return(
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
        );
    }
}

export default SocialMedia;