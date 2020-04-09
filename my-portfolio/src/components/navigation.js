import React, { Component } from 'react';
import pdf from '../assets/Haoyan_Jiang.pdf'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
class Navigation extends Component{
    constructor(props){
        super(props)
    }
    scrollTo(e_name){
        scroller.scrollTo(e_name, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    render(){
        return(
            <div className="navigation clearfix" style={{
                transform: `translate(0, ${this.props.slide})`,
                transition: 'transform 90ms linear',
            }}>
                <span>HJ</span>
                <nav>
                    <ul>
                        <li>
                            <a href="#home" onClick={()=>this.scrollTo('home')}>HOME</a>
                        </li>
                        <li>
                            <a href="#about" onClick={()=>this.scrollTo('about')}>ABOUT</a>
                        </li>
                        <li>
                            <a href="#experience" onClick={()=>this.scrollTo('experience')}>EXPERIENCES</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={()=>this.scrollTo('projects')}>PROJECTS</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={()=>this.scrollTo('contact')}>CONTACT</a>
                        </li>
                        <form method="get" action={pdf}>
                            <button type="submit" className="nav-link scroll button-Nav" style={{marginTop:"4px", marginLeft:"15px"}}> RESUME </button>
                        </form>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Navigation;