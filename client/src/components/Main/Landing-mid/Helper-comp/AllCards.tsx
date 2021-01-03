import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import {Projects} from './Projects';

const useStyle =  makeStyles((theme) => ({
    root: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
      cardAct:{
          justifyContent:'center',
      },
}));
export const AllCards:React.FC<{type:any,setBackdrop(loc)}> = (props)=>{
    const classes = useStyle();
    var showProject = Projects;
    if(props.type !== "all"){
        showProject = Projects.filter(project=>project.type===props.type);
    }
    return(
        <Fade in timeout={1000}>
        <Grid container spacing={3}>
            {showProject.map((project)=>(
            <Grid key={project.name} item xs={12} sm={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={project.image}
                            title="Contemplative Reptile"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {project.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {project.content}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className = {classes.cardAct}>
                        {/*<Button size="small" color="primary" onClick={()=>{
                            if(project.source !=='null'){
                                    props.setBackdrop(true);
                                    window.location.href=`${project.source}`;
                                    setTimeout(()=>{props.setBackdrop(false)},6000);
                                }
                            }}>
                            GitHub
                        </Button>*/}
                        {project.type === "react" &&
                            <Button size="small" color="primary" onClick={()=>{
                                if(project.demo !=='null'){
                                    props.setBackdrop(true);
                                    window.location.href=`${project.demo}`;
                                    setTimeout(()=>{props.setBackdrop(false)},6000);
                                    }}}>
                                Demo Website
                            </Button>
                        }
                        {project.type === "android" &&
                            <Button size="small" color="primary" onClick={()=>{
                                if(project.demo !=='null'){
                                    props.setBackdrop(true);
                                    window.location.href=`${project.demo}`;
                                    setTimeout(()=>{props.setBackdrop(false)},6000);
                                    }}}>
                                Demo Application
                            </Button>
                        }
                        {project.type === "python" &&
                            <Button size="small" color="primary" onClick={()=>{
                                if(project.demo !=='null'){
                                    props.setBackdrop(true);
                                    window.location.href=`${project.demo}`;
                                    setTimeout(()=>{props.setBackdrop(false)},6000);
                                    }}}>
                                Demo Script
                            </Button>
                        }
                    </CardActions>
                </Card>
            </Grid>))}
        </Grid>
        </Fade>)
}