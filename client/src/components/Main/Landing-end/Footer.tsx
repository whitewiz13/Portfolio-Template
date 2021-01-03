import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Copyright(props) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        {props.endName}
      </Link>{' '}
      {/*new Date().getFullYear()*/}
      {/*'.'*/}
    </Typography>
  );
}
interface Props{
  setBackdrop : (loc)=>void
}
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#D3D3D3",
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  icon:{
    marginTop:"10px",
    color : "black",
}   ,
}));

export const Footer:React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
         Ciao
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
         Thanks for stopping by
        </Typography>
        <div style ={{textAlign : 'center'}}>
          <IconButton className = {classes.icon}              
              onClick={()=>{
                props.setBackdrop(true);
                window.location.href = "https://www.linkedin.com/in/sandeep-thakur-96a378143/";
                setTimeout(()=>{props.setBackdrop(false)},3000);}}>
            <LinkedInIcon style = {{fontSize:'30px'}}/>
            </IconButton>
            <IconButton className = {classes.icon}                
              onClick={()=>{
                  props.setBackdrop(true);
                  window.location.href = "http://instagram.com/whisperingoasis/";
                  setTimeout(()=>{props.setBackdrop(false)},3000);}}>
              <InstagramIcon style = {{fontSize:'30px'}}/>
            </IconButton>
            <IconButton className = {classes.icon}                 
                onClick={()=>{
                  props.setBackdrop(true);
                   window.location.href = "https://github.com/whitewiz13";
                   setTimeout(()=>{props.setBackdrop(false)},3000);}}>
                <GitHubIcon style = {{fontSize:'30px'}}/>
            </IconButton>
        </div>  
        <Copyright endName = "Sandeep Thakur"/>
      </Container>
    </footer>
  );
}