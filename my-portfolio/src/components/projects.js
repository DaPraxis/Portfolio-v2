import React, {Component} from 'react';
import SProject from './sProject.js';
import DProject from './dProjects.js';
import img1 from '../assets/section1.gif';
import img2 from '../assets/ds.gif'
class Projects extends Component{

    constructor(props){
        super(props);
        this.state= {
            projects:[
                {
                    pic: img1, 
                    picAlt: "Machine Learning project",
                    date: '08-20-2019',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cum eos esse omnis rerum sit labore numquam quisquam at, totam nostrum quibusdam nesciunt rem molestias vel eaque illo tempora. Corrupti?',
                    link: "https://github.com/DaPraxis"
                },
                {
                    pic: img2, 
                    picAlt: "Machine Learning project",
                    date: '08-20-2019',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cum eos esse omnis rerum sit labore numquam quisquam at, totam nostrum quibusdam nesciunt rem molestias vel eaque illo tempora. Corrupti?',
                    link: "https://github.com/DaPraxis"
                }
            ]
        };
        this.projects = []
    }

    render() {
        var count = 0
        this.state.projects.forEach(e => {
            if(count%2===0){
                this.projects.push(<SProject key={count} projectImg={e.pic} projectAlt={e.picAlt} date={e.date} text={e.text} link={e.link}/>)
            }
            else{
                this.projects.push(<DProject key={count} projectImg={e.pic} projectAlt={e.picAlt} date={e.date} text={e.text} link={e.link}/>)
            }
            count++;
        });
        console.log(this.projects)
        return (
            <section className="projects" id="projects" name='projects'>
                {this.projects}
            </section>
        );
    }
}

export default Projects;