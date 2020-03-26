import React, { Component } from 'react';
import SocialMedia from './socialMedia.js'
import Navigation from './navigation.js'
import Typed from 'react-typed';
class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            slide:{
                slide: 0,  // How much should the Navbar slide up or down
                hidden: false, 
                simple: true
            },
              lastScrollY: 0,  // Keep track of current position in state
        }
    }
    componentDidMount() {
        // When this component mounts, begin listening for scroll changes
        window.addEventListener('scroll', this.handleScroll);
    }
    
    // componentWillUnmount() {
    //     // If this component is unmounted, stop listening
    // window.removeEventListener('scroll', this.handleScroll);
    // }

    handleScroll = () => {
    const { lastScrollY } = this.state; 
    const currentScrollY = window.scrollY;


    if (currentScrollY > lastScrollY) {
        this.setState({ slide: '-60px' });
    } else {
        this.setState({ slide: '0px' });
    }
    this.setState({ lastScrollY: currentScrollY });
    };
    

    render(){
        return (
            <header>
            <div className="wrapper" id='home' name='home'>
                <Navigation slide={this.state.slide}/>
                <div className="titleText">
                    <h1>
                        Max Jiang
                    </h1>
                    <Typed
                        strings={['I am a <Strong>Machine Learning Engineer</Strong> 🧮', 'I am a <Strong>Full-Stack Developer</Strong> 🕸', 'I am a <Strong>Gamer</Strong> 🎮']}
                        typeSpeed={30}
                        backSpeed={15}
                        backDelay={2000}
                        showCursor
                        smartBackspace
                        loop
                        style={{
                            width : "100%",
                            fontSize: "1.8rem",
                            fontFamily: 'Josefin Sans',
                            fontWeight:"bold",
                            marginTop:"10px"

                        }}
                    />
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

