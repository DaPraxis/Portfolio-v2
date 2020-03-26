import React, { Component} from 'react';
import VerticalTabs from '../components/Tabs.js'
class Experiences extends Component{

    state = 
    {
        experiences:
        [
            {
                label:'UofT IML Lab',
                title: 'Machine Learning Engineer & Software Developer',
                location: '@University of Toronto Interactive Media Lab',
                time: '02/2020 – present',
                link: "https://imedia.mie.utoronto.ca/",
                content:[<p>Using <span>the Transfer Learning model</span>, <span>Multitask Learning</span> and <span>Convolutional Neural Network</span> to analyze <span>fMRI images</span> and predict the stage of dementia based on full-brain analysis</p>,
                    <p>Developing <span>the Centivizer system</span> with <span>Full-Stack</span> techniques to stimulate subjects' different brain sections</p>,
                    ]
            },
            {
                title: 'Software Engineer & 3D Modeling',
                label: 'UofT IML Lab',
                link: 'https://imedia.mie.utoronto.ca/', 
                location: '@University of Toronto Interactive Media Lab',
                time:' 05/2019 - 09/2019',
                content: [
                    <p>Driving Simulation Game for Elder People; Engine building, game logic and modeling of real-time driving experiences on web-serving applications using <span>Babylon.js</span></p>,
                <p>Building and importing 3D models for famous scenic views in the world using <span>Blender</span></p>,
                <p>Provide data insight with <span>MongoDB</span>, using learning algorism to analyze player’s brain functionality</p>
            ]    
            },
        ]
    }
    constructor(props){
        super(props);
    }
    

    render() {
        return(
            <section className="experience" id="experience" name='experience'>
                <div className="experienceContent">
                    <div className="experienceTitle">
                        <h2>Experience</h2>
                    </div>
                    <div className="experienceDetails">
                        <VerticalTabs exps={this.state.experiences}/>
                    </div>
                </div>
            </section>
        )
    }
}
export default Experiences;