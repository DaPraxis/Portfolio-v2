import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel.js';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
        display: 'flex',
        alignItems:'center',
        height: 380,
    },
    tabs: {
        borderRight: `2px solid ${theme.palette.divider}`,
        minWidth: `20%`,
        display: 'flex',
        alignItems:'flexStart',
        height: `100%`,
        textTransform: 'capitalize',
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
    lst.push(<h4 key={'3'+10*index}>{exp.time}</h4>)
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
                indicatorColor='primary'
            >
                {tabs}
            </Tabs>
            {panels}
        </div>
    )
}
return (
    emsemble(value, props.exps)
);
}
