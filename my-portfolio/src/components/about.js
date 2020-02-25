import React, {Component} from 'react'
import avatar from '../assets/compressed 1MB Haoyan.jpg'
class About extends Component{



    render(){
        return(
            <section className="about" id="about">
                <div className="aboutContent">
                    <div className="aboutText">
                        <h2>About Me</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit amet distinctio minus fuga natus, aliquam, ipsa molestiae tenetur aut reiciendis dolore? Dolore ipsa iusto tempore non magnam autem, ducimus ipsum.</p>
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