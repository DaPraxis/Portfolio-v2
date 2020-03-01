import React, { Component} from 'react';
import VerticalTabs from '../components/Tabs.js'
class Experiences extends Component{

    state = 
    {
        experiences:
        [
            {
                title: 'Software Engineer & 3D Modeling',
                label: 'UofT IML Lab',
                link: 'https://imedia.mie.utoronto.ca/', 
                location: '@University of Toronto Interactive Media Lab',
                time:' 05/2019 - 09/2019',
                content: [
                    'Driving Simulation Game for Elder People; Engine building, game logic and modeling of real-time driving experiences on web-serving applications using Babylon.js',
                'Building and importing 3D models for famous scenic views in the world using Blender',
                'Data collection and analysis with MongoDB, using learning algorism to analyze player’s brain functionality',
                'Working with elder people in medical institutes to improve game design and game play experiences']    
            },
            {
                label:'UofT IML Lab',
                title: 'Junior Full Stack Developer',
                location: '@University of Toronto Interactive Media Lab',
                time: '04/2019 – 09/2019',
                link: "https://imedia.mie.utoronto.ca/",
                content:['Managing back-end performance, administration and data collections using MongoDB',
                    'Responsive web design, exposure to React.js implementation, Node.js',
                    'Interactive dashboard design and data representation for future researches']
            }
        ]
    }
    constructor(props){
        super(props);
    }
    

    render() {
        return(
            <section className="experience" id="experience">
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