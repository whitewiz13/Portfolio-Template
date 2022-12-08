import React,{useRef,forwardRef,useImperativeHandle} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ScrollAnimation from 'react-animate-on-scroll';
import Grid from '@material-ui/core/Grid';
import ClassIcon from '@material-ui/icons/Class';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SchoolIcon from '@material-ui/icons/School';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
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
    edupap:{
        padding : '10px 10px 10px 10px',
    },
}));
export const Education = forwardRef((props,ref) =>{
    const classes = useStyle();
    const eduRef = useRef(null);

    useImperativeHandle(ref,()=>({
        executeScroll(){
            scrollToRef(eduRef);
        }
    }));

    return(
        <React.Fragment>
            <Paper className = {classes.mainAbout} variant="outlined" ref={eduRef}>
                <Typography component = "h3" variant="h3" style = {{textAlign:'center'}}>
                    <strong>Education / Experience</strong>
                </Typography>
                <Grid container>
                    <Grid item xs = {6} style={{width:'800px',textAlign:'center'}}>
                        <Timeline align="alternate">
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="subtitle2">
                                        2015
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot style={{backgroundColor:'black'}}>
                                        <ClassIcon />
                                    </TimelineDot>
                                    <TimelineConnector style={{height:'150px',backgroundColor:'black'}}/>
                                </TimelineSeparator>
                                <TimelineContent>
                                    <ScrollAnimation animateIn="flipInX"  animateOnce = {true} >
                                        <Paper variant = "outlined" className={classes.edupap}>
                                            <Typography variant="h6" component="h1">
                                                School
                                            </Typography>
                                            <Typography variant = "subtitle2">Kullu Valley School</Typography>
                                            <Typography>Indian Certificate of Secondary Education (ICSE)</Typography>
                                        </Paper>
                                    </ScrollAnimation>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="subtitle2">
                                        2015-2018
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot style={{backgroundColor:'black'}}>
                                        <MenuBookIcon />
                                    </TimelineDot>
                                    <TimelineConnector style={{height:'150px',backgroundColor:'black'}}/>
                                </TimelineSeparator>
                                <TimelineContent>
                                    <ScrollAnimation animateIn="flipInX"  animateOnce = {true} >
                                        <Paper variant = "outlined" className={classes.edupap} style={{textAlign:'center'}}>
                                            <Typography variant="h6" component="h1">
                                                College
                                            </Typography>
                                            <Typography variant = "subtitle2">Bachelor of Science (Computer Science)</Typography>
                                            <Typography>Himachal Pradesh University</Typography>
                                        </Paper>
                                    </ScrollAnimation>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="subtitle2">
                                        2018-2020
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot style={{backgroundColor:'black'}}>
                                        <SchoolIcon />
                                    </TimelineDot>
                                </TimelineSeparator>
                                <TimelineContent>
                                    <ScrollAnimation animateIn="flipInX"  animateOnce = {true} >
                                        <Paper variant = "outlined" className={classes.edupap}>
                                            <Typography variant="h6" component="h1">
                                                University
                                            </Typography>
                                            <Typography variant = "subtitle2">Master of Science (Information Technology)</Typography>
                                            <Typography>Central University of Himachal Pradesh</Typography>
                                        </Paper>
                                    </ScrollAnimation>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Grid>
                    <Grid item xs = {6} style={{width:'800px',textAlign:'center'}}>
                        <Timeline align="alternate">
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="subtitle2">
                                        Jan 2021-May 2022
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot style={{backgroundColor:'black'}}>
                                        <ClassIcon />
                                    </TimelineDot>
                                    <TimelineConnector style={{height:'150px',backgroundColor:'black'}}/>
                                </TimelineSeparator>
                                <TimelineContent>
                                    <ScrollAnimation animateIn="flipInX"  animateOnce = {true} >
                                        <Paper variant = "outlined" className={classes.edupap}>
                                            <Typography variant="h6" component="h1">
                                                Compact Gyan
                                            </Typography>
                                            <Typography variant = "subtitle2">Full Stack Developer</Typography>
                                            <Typography>Delhi, India</Typography>
                                        </Paper>
                                    </ScrollAnimation>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography variant="subtitle2">
                                        May 2022-Present
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot style={{backgroundColor:'black'}}>
                                        <MenuBookIcon />
                                    </TimelineDot>
                                  
                                </TimelineSeparator>
                                <TimelineContent>
                                    <ScrollAnimation animateIn="flipInX"  animateOnce = {true} >
                                        <Paper variant = "outlined" className={classes.edupap} style={{textAlign:'center'}}>
                                            <Typography variant="h6" component="h1">
                                                iQueue 365
                                            </Typography>
                                            <Typography variant = "subtitle2">Co-Founder / Software Engineer</Typography>
                                            <Typography>San Jose, California, USA</Typography>
                                        </Paper>
                                    </ScrollAnimation>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    )
})