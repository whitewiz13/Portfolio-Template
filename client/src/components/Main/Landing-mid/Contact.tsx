import React,{useRef,forwardRef,useImperativeHandle} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from  '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ScrollAnimation from 'react-animate-on-scroll';
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
}));

export const Contact = forwardRef((props,ref) =>{
    const classes = useStyle();
    const contactRef = useRef(null);

    useImperativeHandle(ref,()=>({
        executeScroll(){
            scrollToRef(contactRef);
        }
    }));

    return(
        <React.Fragment>
            <Paper className = {classes.mainAbout} variant="outlined" ref={contactRef}>
                <Typography component = "h3" variant="h3" style = {{textAlign:'center'}}>
                    <strong>Contact</strong>
                </Typography>
                <ScrollAnimation animateIn="fadeIn"  animateOnce = {true}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Grid item xs={12}>
                                <TextField label="Name" variant="outlined" fullWidth margin="normal"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Email" variant="outlined" fullWidth margin="normal"/>
                            </Grid>
                            <Grid item xs ={12}>
                                <TextField
                                    label="Enter your message!"
                                    multiline
                                    rows={6}
                                    variant="outlined"
                                    fullWidth 
                                    margin="normal"/>
                            </Grid>
                            <Grid container alignContent="center" direction = "column">
                                <Button size ="large" variant="contained" style={{backgroundColor:"black",color:"white"}}>
                                    Send Message
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </ScrollAnimation>
            </Paper>
        </React.Fragment>
    )
})