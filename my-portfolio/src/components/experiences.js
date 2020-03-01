import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import VerticalTabs from '../components/Tabs.js'
class Experiences extends Component{

    state = 
    {
        count : 0,
        experiences:
        [
            {
                title: 'Software Engineer & 3D Modeling',
                label: 'UofT IML Lab',
                link: 'https://imedia.mie.utoronto.ca/', 
                location: '@University of Toronto Interactive Media Lab',
                time:' 05/2019 - 09/2019',
                content: [
                    'Driving Simulation Game for Elder People; Engine building, \
                game logic and modeling of real-time driving experiences on web-serving applications using Babylon.js',
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
        // const [value, setValue] = React.useState(0);
        const classes = makeStyles(theme => ({
            root: {
                flexGrow: 1,
                backgroundColor: theme.palette.background.paper,
                display: 'flex',
                height: 224,
            },
            tabs: {
                borderRight: `1px solid ${theme.palette.divider}`,
            },
        }));
        const handleChange = (event, newValue) => {
            this.state.count = newValue
        }
        function TabPanel(props) {
            const { children, value, index, ...other } = props;
            return (
                <Typography
                    component="div"
                    role="tabpanel"
                    hidden={value !== index}
                    id={`vertical-tabpanel-${index}`}
                    aria-labelledby={`vertical-tab-${index}`}
                    {...other}
                >
                {value === index && <Box p={3}>{children}</Box>}
                </Typography>
            );
        }
        TabPanel.propTypes = {
            children: PropTypes.node,
            index: PropTypes.any.isRequired,
            value: PropTypes.any.isRequired,
        };
        function single(exp, index, value){
            let ret = []
            let lst = []
            lst.push(<h3 key={'1'+10*index}>{exp.title}</h3>)
            lst.push(<a key={'2'+10*index} href={exp.link}>{exp.location}</a>)
            let ps =exp.content.map((e, index)=><p key={index}>{e}</p>)
            lst= lst.concat(ps)
            ret.push(
                <TabPanel value={value} index={index} key={index+"panel"}>
                    {lst}
                </TabPanel>
            )
            ret.push(
                <Tab label={exp.label} id={'vertical-tab-'+index}
                aria-controls= {'vertical-tabpanel-'+index} key={index+"tab"}/>
            )
            return(
                ret
            ) 
        }
        function emsemble(value, exps){
            let tabs = []
            let panels = []
            for (const [index, exp] of exps.entries()){
                let res = single(exp, index, value)
                tabs.push(res[1])
                panels.push(res[0])
            }
            return(
                <div className={classes.root}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                    >
                        {tabs}
                    </Tabs>
                    {panels}
                </div>
            )
        }
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