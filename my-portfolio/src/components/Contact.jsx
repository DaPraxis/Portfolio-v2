import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles,ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import * as emailjs from 'emailjs-com'
import ShowOff from './ShowOff'
import {teal, cyan} from '@material-ui/core/colors';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    // backgroundRepeat: 'no-repeat',
    // backgroundColor:
    //   theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
  },
  paper: {
    paddingRight: '15%',
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  }));
export default function Contact(){

  const [values, setValues] = React.useState({
    email: '',
    name: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e)=> {
    e.preventDefault()
    // let templateParams = {
    //     reply_to: 'Haoyan Jiang',
    //     from_name: email,
    //     to_name: 'Haoyanjiang0709@gmail.com',
    //     //   "subject": subject,
    //     message_html: message,
    //     }
    var templateParams = {
        "userEmail": values.email,
        "userName": values.name,
        "concernCategory": "Resume Feedback",
        "emailTitle": values.subject,
        "emailDetail": values.message
     }
     console.log(templateParams)
     var service_id = "default_service";
     var template_id = "template_kKDQLQ7U";
    let use_id = 'user_2JlED0G1y98oWpFm3Bp39'
     emailjs.send(
        service_id,
        template_id,
        templateParams,
        use_id
     ).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
     }, (err) => {
        console.log('FAILED...', err);
     });
     resetForm()
 }

 const handleChange = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
};

const resetForm= ()=>{
    setValues({
      email: '',
      name: '',
      subject: '',
      message: '',
    })
  }
// const handleChange = (param, e) => {
//     this.setState({ [param]: e.target.value })
//   }
    const classes = useStyles();
    const theme = createMuiTheme({
      palette: {
        primary: teal,
        secondary: cyan
      },
    });
    return (
  <Grid container component="main" className={classes.root}>
      {/* <CssBaseline /> */}
      {/* <Fade left> */}
        <Grid item xs={false} sm={4} md={7} className={classes.image}>
          <ShowOff/>
        </Grid>
      {/* </Fade> */}
      {/* <Fade left> */}
      <Grid item xs={12} sm={6} md={5} component={Paper} elevation={2} square>
        <div className={classes.paper}>
        <ThemeProvider theme={theme}>
          <Avatar className={classes.avatar} style={{color: teal}}>
            <ContactMailRoundedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Contact Me
          </Typography>
          <form className={classes.form} 
          action="http://www.focuspocus.io/magic/haoyanjiang0709@gmail.com" 
          method="POST" 
          enctype="multipart/form-data">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={values.email}
              onChange={handleChange('email')}
              autoComplete="email"
              // autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="name"
              label="Name"
              type="name"
              id="name"
              value={values.name}
              onChange={handleChange('name')}
              autoComplete="name"
            />
            <TextField
              variant="outlined"
              margin="normal"
              // required
              fullWidth
              name="title"
              label="Title"
              type="title"
              value = {values.subject}
              onChange={handleChange('subject')}
              id="title"
              autoComplete="title"
            />
            <TextField
              variant="outlined"
              margin="normal"
              // required
              fullWidth
              multiline
              name="text"
              label="Text"
              value={values.message}
              onChange={handleChange('message')}
              type="text"
              id="text"
              autoComplete="text"
              rows="5"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            {/* <ThemeProvider theme={theme}> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
              >
                Yooooooo!! NICE PORTFOLIO
              </Button>
            <Box mt={5}>
            </Box>
          </form>
          </ThemeProvider>
        </div>
      </Grid>
      {/* </Fade> */}
    </Grid>
  );
}