import React, {Component} from 'react';
import SProject from './sProject.js';
import DProject from './dProjects.js';
import img1 from '../assets/attention.jpg';
import img2 from '../assets/ds.gif';
import img3 from '../assets/lstm.png';
import img4 from '../assets/socan.gif'
import img5 from '../assets/NIH.PNG'
import {DiMongodb, DiJavascript1, DiPython, DiNpm, DiMaterializecss, DiRuby, DiReact, DiHeroku,DiPostgresql} from "react-icons/di";
import { GiCube } from "react-icons/gi";
import { Icon, InlineIcon } from '@iconify/react';
import pytorchIcon from '@iconify/icons-simple-icons/pytorch';
class Projects extends Component{

    constructor(props){
        super(props);
        this.state= {
            projects:[
                {
                    title: 'NIH Challenge: The Framingham Heart Study',
                    pic: img5,
                    picAlt: "Data Science, heart study",
                    date: '2020 Mar - Present',
                    text: 'Perform data analysis on the reknown longitudinal cohort study NIH presents, pattern finding and recognition for cardiovascular disease',
                    techs: [[<DiPython className='icon'/>,'python'],[<Icon icon={pytorchIcon} className='icon'/>, 'PyTorch'],[<Icon icon={GiCube} className='icon'/>,'Numpy']]
                },
                {
                    title: 'License Purchasing & Subscription Managing Website for Performance Right Organizations(PRO)',
                    pic: img4, 
                    picAlt: "Subscription site",
                    date: '2020 Jan - Present',
                    text: 'Implementation of license purchasing, user management, data insight and subscription management for PROs like SOCAN',
                    link: "https://github.com/DaPraxis",
                    techs: [[<DiMaterializecss className='icon'/>,'Material_Design'],[<DiRuby className='icon'/>, 'Ruby_on_Rail'], [<DiJavascript1 className='icon'/>, 'JavaScript'], [<DiReact className='icon'/>, 'React.js'],[<DiHeroku className='icon'/>, 'Heroku'],[<DiPostgresql className='icon'/>, 'PostgreSQL'],[<DiNpm className='icon'/>, 'npm']]
                },
                {
                    title: 'Long-Short Term Memory Model in Time Series (AAE-LSTM-ET)',
                    pic: img3, 
                    picAlt: "Machine Learning project",
                    date: '2020 Feb - Present',
                    text: 'Take advantage of the LSTM model to deal with longitudinal data and time-series problems.',
                    link: "https://github.com/DaPraxis",
                    techs: [[<DiPython className='icon'/>,'python'],[<Icon icon={pytorchIcon} className='icon'/>, 'PyTorch']]
                },
                {   
                    title: 'Driving Simulator',
                    pic: img2, 
                    picAlt: "Driving Simulator",
                    date: '2019 May - present',
                    text: 'Driving Simulation Game for Elder People; Integration of the Centivizer project in the Interactive Media Lab',
                    link: "https://github.com/DaPraxis",
                techs: [[<DiMongodb className='icon'/>,'Mongodb'], [<DiJavascript1 className='icon'/>, "JavaScript"], [<DiNpm className='icon'/>, 'npm']]
                },
                {
                    title: 'Self-implementation of Transformer and GRU with Attention',
                    pic: img1, 
                    picAlt: "Machine Learning project",
                    date: '2020 Feb - Mar',
                    text: 'Exploiting the power of Transformer model with Additive Attention and Scaled Dot Product Attention to translate Pig-Latin, test against traditional GRU and RNN models.',
                    link: "https://github.com/DaPraxis",
                    techs: [[<DiPython className='icon'/>,'python'],[<Icon icon={pytorchIcon} className='icon'/>, 'PyTorch']]
                }
            ]

        };
        this.projects = []
    }

    render() {
        var count = 0
        this.state.projects.forEach(e => {
            if(count%2===0){
                this.projects.push(<SProject key={count} project={e} index={count}/>)
            }
            else{
                this.projects.push(<DProject key={count} project={e} index={count}/>)
            }
            count++;
        });
        return (
            <section className="projects" id="projects" name='projects'>
                {this.projects}
            </section>
        );
    }
}

export default Projects;