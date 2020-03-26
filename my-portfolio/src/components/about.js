import React, {Component} from 'react'
import avatar from '../assets/compressed 1MB Haoyan.jpg'
class About extends Component{



    render(){
        return(
            <section className="about" id="about" name='about'>
                <div className="aboutContent">
                    <div className="aboutText">
                        <h2>About Me</h2>
                        <p>Hello! I am Haoyan (Max) Jiang, a fourth year B.Sc double major in<span>Computer Science & Statistics</span> in <span className="aboutBold">the University of Toronto (St.George)</span>. </p>
                        <p>Future <span>Direct PhD</span> in Mechanical & Industrial Department under the supervision of Professor Mark Chignell</p>
                        <p>Focusing on developing software to research in <span>public health</span> and <span>medical industry</span> and provide data insight using <span className="aboutBold">Transfer Learning</span> and <span className="aboutBold">Multitask Learning</span> models.</p>
                        <p>Proud <span>Machine Learning Engineer</span> and <span>Web Developer</span>.</p>
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