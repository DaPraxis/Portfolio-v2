import React, {Component} from 'react';
class DProject extends Component{
    constructor(props){
        super(props);
        this.title = props.project.title
        this.pic = props.project.pic;
        this.picAlt = props.project.picAlt;
        this.text = props.project.text;
        this.link = props.project.link;
        this.date = props.project.date;
        this.tech = props.project.techs;
        this.index = props.index;
        this.techs = []
        this.tech.forEach((e, index)=>{
            this.techs.push(
                <div className='containerP' key={index+1000*this.index}>
                    <div className="wrap" key={index+10+1000*this.index}>
                        <div className="first" key={index+100+1000*this.index}>{e[0]}</div>
                        <div className="second" key={index+200+1000*this.index}>{e[1]}</div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="project">
                <div className="projectVoid">
                    <div className="projectImgLeft">
                        <img src={this.pic} alt={this.picAlt}/>
                    </div>

                    <div className="projectDetail">
                        <h3>{this.title}</h3>
                        <p>{this.date}</p>
                        <p>{this.text}</p>
                        <div className='techs'>
                            {this.techs}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DProject;