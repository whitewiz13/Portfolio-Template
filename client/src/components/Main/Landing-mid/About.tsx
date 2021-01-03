import React, {useRef,forwardRef,useImperativeHandle} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';

const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop);
} 

const useStyle =  makeStyles((theme) => ({
    mainAbout:{
        margin : '20px 20px 20px 20px',
        padding : '10px 10px 10px 10px',
        postition :'relative',
        '@media only screen and (max-width: 640px)' : {
            marginTop : '10px',
            padding : '5px 5px 15px 5px',
            margin : '0 0 0 0',
            borderRadius:'0px',
            borderTop:'none',
        },
    },
    subAbout:{
        margin : '20px 20px 20px 20px',
        padding : '20px 20px 20px 20px',
        fontFamily : 'Roboto',
        minHeight : '380px',
        '@media only screen and (max-width: 640px)' : {
            marginTop : '10px',
            margin : '0 0 0 0',
            minHeight : '180px',
        },
    },
    subAboutPic:{
        margin : '20px 20px 20px 20px',
        padding : '10px 10px 10px 10px',
        height : '410px',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        background : 'url(https://picsum.photos/id/1025/1920/1080)',
        backgroundPosition: 'center top',
        position: 'relative',
        zIndex:3,
        display: 'block',
        '@media only screen and (max-width: 640px)' : {
            margin : '0 0 0 0',
            height : '200px',
        },
    },
}));
export const About =forwardRef((props,ref) =>{
    const aboutRef = useRef(null);
    const classes = useStyle();

    useImperativeHandle(ref,()=>({
        executeScroll(){
            scrollToRef(aboutRef);
        }
    }));
    
    return(
        <React.Fragment>
            <ScrollAnimation animateIn="fadeIn"  animateOnce = {true}>
                <Paper className = {classes.mainAbout} variant="outlined" ref={aboutRef}>
                    <Typography component = "h3" variant="h3" style = {{textAlign:'center'}}>
                        <strong>About Me</strong>
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item lg={6} xs ={12}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce = {true}>
                                <Paper className = {classes.subAboutPic} elevation = {3}></Paper>
                            </ScrollAnimation>
                        </Grid>
                        <Grid item lg={6} xs ={12}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce = {true}>
                                <Paper className = {classes.subAbout} elevation = {3} >
                                    <Typography component = "h5" variant = "h5" style = {{fontFamily : 'Lato'}}>
                                        <strong>Hello</strong>
                                    </Typography>
                                    <br/>
                                    <Divider></Divider>
                                    <Typography component="p" variant="subtitle1">
                                        My name is Sandeep Thakur. I am a computer science pofessional which is mostly just a fancy term that means i know things about computers, mostly i am developer i can make website, web application,
                                        android applications and alot more computer related things!
                                    </Typography>
                                    <br/>
                                    <Typography component="p" variant="subtitle1">
                                        Other than devleloping applications, i like to read and write novels (working on the writing part). So contact me if you have any project where i could be usefull!
                                    </Typography>
                                    <Divider></Divider>
                                    <br/>
                                    <Grid item xs = {12} style={{padding:'5px',textAlign:'left'}}>
                                        <Grid container>
                                            <PhoneIcon/>
                                            <Typography component='p' variant="subtitle2" style={{fontSize:'15px',margin:'0px 0px 0px 10px'}}>+91 8894408318</Typography>
                                        </Grid>
                                        <Grid container style={{margin:'10px 0px 0px 0px'}}>
                                            <HomeIcon/>
                                            <Typography component='p' variant="subtitle2" style={{fontSize:'15px',margin:'0px 0px 0px 10px'}}>Kullu, Himachal Pradesh</Typography>
                                        </Grid>
                                        <Grid container style={{margin:'10px 0px 0px 0px'}}>
                                            <MailIcon/>
                                            <Typography component='p' variant="subtitle2" style={{fontSize:'15px',margin:'0px 0px 0px 10px'}}>sandeepthakur130197@gmail.com</Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </ScrollAnimation>
                        </Grid>
                    </Grid>
                </Paper>
            </ScrollAnimation>
        </React.Fragment>
    )
})