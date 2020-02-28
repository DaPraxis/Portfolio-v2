import React, { Component } from 'react';

class Navigation extends Component{

    render(){
        return(
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
        );
    }
}
export default Navigation;