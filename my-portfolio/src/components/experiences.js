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
                content:['Using the Transfer Learning model, Multitask Learning and Convolutional Neural Network to analyze fMRI images and predict the stage of dementia based on full-brain analysis',
                    "Developing the Centivizer system with Full-Stack techniques to stimulate subjects' different brain sections",
                    ]
            },
            {
                title: 'Software Engineer & 3D Modeling',
                label: 'UofT IML Lab',
                link: 'https://imedia.mie.utoronto.ca/', 
                location: '@University of Toronto Interactive Media Lab',
                time:' 05/2019 - 09/2019',
                content: [
                    'Driving Simulation Game for Elder People; Engine building, game logic and modeling of real-time driving experiences on web-serving applications using Babylon.js',
                'Building and importing 3D models for famous scenic views in the world using Blender',
                'Provide data insight with MongoDB, using learning algorism to analyze player’s brain functionality'
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