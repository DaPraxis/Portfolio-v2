import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    display: 'flex',
    alignItems:'center',
    // height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: `20%`,
    display: 'flex',
    alignItems:'flexStart',
    height: `100%`
  },
}));

export default function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
return (
    <section className="experience" id="experience">
        <div className="experienceContent">
            <div className="experienceTitle">
                <h2>Experience</h2>
            </div>
            <div className="experienceDetails">
                {emsemble(value, props.exps)}
            </div>
        </div>
    </section>
);

//   return (
//     <div className={classes.root}>
//       <Tabs
//         orientation="vertical"
//         variant="scrollable"
//         value={value}
//         onChange={handleChange}
//         aria-label="Vertical tabs example"
//         className={classes.tabs}
//       >
//         <Tab label="Item One" {...a11yProps(0)} />
//         <Tab label="Item Two" {...a11yProps(1)} />
//         <Tab label="Item Three" {...a11yProps(2)} />
//         <Tab label="Item Four" {...a11yProps(3)} />
//         <Tab label="Item Five" {...a11yProps(4)} />
//         <Tab label="Item Six" {...a11yProps(5)} />
//         <Tab label="Item Seven" {...a11yProps(6)} />
//       </Tabs>
//       <TabPanel value={value} index={0}>
//         Item One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         Item Four
//       </TabPanel>
//       <TabPanel value={value} index={4}>
//         Item Five
//       </TabPanel>
//       <TabPanel value={value} index={5}>
//         Item Six
//       </TabPanel>
//       <TabPanel value={value} index={6}>
//         Item Seven
//       </TabPanel>
//     </div>
//   );
}
