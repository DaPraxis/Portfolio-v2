import React, {Component} from 'react'
import avatar from '../assets/compressed 1MB Haoyan.jpg'
class About extends Component{



    render(){
        return(
            <section className="about" id="about">
                <div className="aboutContent">
                    <div className="aboutText">
                        <h2>About Me</h2>
                        <p>Hello! I am Haoyan (Max) Jiang, a fourth year undergraduate double major in Computer Science & Statistics in the University of Toronto(st.George). </p>
                        <p>Proud Web Developer and Machine Learning Engineer.</p>
                    </div>
                </div>
                <div className="aboutImg">
                    <img src={avatar} alt="Avatar">
                    </img>
                </div>
            </section>
        );
    }
}

export default About;