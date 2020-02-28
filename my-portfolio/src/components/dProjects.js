import React, {Component} from 'react';

class DProject extends Component{
    constructor(props){
        super(props);
        this.pic = props.projectImg;
        this.picAlt = props.projectAlt;
        this.text = props.text;
        this.link = props.link;
        this.techs = props.techs;
    }

    render() {
        return (
            <div className="project">
                <div className="projectVoid">
                    <div className="projectImgLeft">
                        <img src={this.pic} alt={this.picAlt}/>
                    </div>

                    <div className="projectDetail">
                        <h3>Title</h3>
                        <p>2018.12.28</p>
                        <p>{this.text}</p>
                        <h4>Techology</h4>
                        <a href={this.link}>
                            <i className="fab fa-github"></i>
                            <span className="visuallyhidden">github</span>
                        </a>
                    <p>{this.techs}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DProject;