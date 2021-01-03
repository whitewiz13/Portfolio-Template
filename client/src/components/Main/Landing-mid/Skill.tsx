import React,{useRef,forwardRef,useImperativeHandle} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import ScrollAnimation from 'react-animate-on-scroll';
import { makeStyles } from '@material-ui/core/styles';
import {Chips} from './Helper-comp/Chips';
import {LinearProgressWithLabel} from './Helper-comp/LinearProgressBarWithLabel';

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
}));

export const Skill = forwardRef((props,ref) =>{
    //const [progValue,setProgValue] = useState(0);
    /*afterAnimatedIn={()=>{setProgValue(100)}}*/

    const classes = useStyle();
    const skillRef = useRef(null);

    useImperativeHandle(ref,()=>({
        executeScroll(){
            scrollToRef(skillRef);
        }
    }));

    return(
        <React.Fragment>
            <Paper className = {classes.mainAbout} variant="outlined" ref={skillRef}>
                <Typography component = "h3" variant="h3" style = {{textAlign:'center'}}>
                    <strong>Skills</strong>
                </Typography>
                <ScrollAnimation animateIn="fadeIn"  animateOnce = {true}>
                    <Grid container style ={{marginTop:'10px'}}>
                        <Grid item xs={12} lg={6} style ={{padding:'0px 20px 0px 20px'}}>
                            <br/>
                            <Typography component = "p" variant="subtitle2" style={{textAlign:'left'}}>
                                Programming and Problem Solving
                            </Typography>
                            <LinearProgressWithLabel value={90} />
                            <br/><br/><br/>
                            <Typography component = "p" variant="subtitle2" style={{textAlign:'left'}}>
                                Learning New technologies
                            </Typography>
                            <LinearProgressWithLabel value={85} />
                            <br/><br/><br/>
                            <Typography component = "p" variant="subtitle2" style={{textAlign:'left'}}>
                                Communication and Team Work
                            </Typography>
                            <LinearProgressWithLabel value={80} />
                            <br/><br/><br/>
                            <Typography component = "p" variant="subtitle2" style={{textAlign:'left'}}>
                                Documentation and explaining
                            </Typography>
                            <LinearProgressWithLabel value={70} />
                            <br/><br/><br/>
                            <Typography component = "p" variant="subtitle2" style={{textAlign:'left'}}>
                                Designing
                            </Typography>
                            <LinearProgressWithLabel value={60} />
                            <br/><br/>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <br/>
                            <Hidden smDown xsDown>
                                <Chips/>
                            </Hidden>
                        </Grid>
                    </Grid>
                </ScrollAnimation>
            </Paper>
        </React.Fragment>
    )
})