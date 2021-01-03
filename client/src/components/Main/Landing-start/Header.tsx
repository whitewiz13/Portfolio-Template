import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Slide from '@material-ui/core/Slide';
import Drawer from '@material-ui/core/Drawer';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
      fontFamily : 'Lato'
    },
    drawerPaper: {
        width: '60%',
    },
    appBar:{
        backgroundColor: 'transparent',
        boxShadow:'none',
        color : 'white',
        height:'52px',
        transition: theme.transitions.create(['background-color'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.standard
          }),
        '@media only screen and (max-width: 640px)' : {
            height:'45px',
        },
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 8px',
        ...theme.mixins.toolbar,
      },
    appBarScrolled : {
        backgroundColor: 'black',
        boxShadow:'3px 3px 3px 6px #000000',
        transition: theme.transitions.create(['background-color'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.standard
          })
    },
    menuButton: {
        marginRight: '-5px',
      },
}));

export const Header:React.FC<{scrollTo(val),setBackDrop(val)}> = (props)=>{
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0});
    const trigger2 = useScrollTrigger();

    const classes = useStyles();

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const handleListItemClick = (event, index) => {
        setDrawerOpen(false);
        if(index === 0){
            props.scrollTo("About");
        }else if(index === 1){
            props.scrollTo("Edu");
        }else if(index === 2){
            props.scrollTo("Skill");
        }else if(index === 3){
            props.scrollTo("Project");
        }else if(index===4){
            //props.setBackDrop(true);
            //window.location.href = "https://blog.sandeepthakur.co"
            props.scrollTo("Blog");
        }else{
            props.scrollTo("Contact");
        }
    };

    return(
        <div>
            <Slide appear={false} direction="down" in={!trigger2}>
                <AppBar position="fixed"  className={`${classes.appBar} ${
                    trigger === false ? '' : classes.appBarScrolled
                    }`} >
                    <Toolbar>
                        <Slide in timeout={800}>
                            <Typography variant="h5" className={classes.title}>
                                Sandeep Thakur
                            </Typography>
                        </Slide>
                        <Hidden xsDown>
                            <Slide in direction = "down" timeout={600}>
                                <div>
                                    <Button color="inherit" onClick = {()=>{props.scrollTo("About")}}>About me</Button>
                                    <Button color="inherit" onClick = {()=>{props.scrollTo("Edu")}}>Education</Button>
                                    <Button color="inherit" onClick = {()=>{props.scrollTo("Skill")}}>Skills</Button>
                                    <Button color="inherit" onClick = {()=>{props.scrollTo("Project")}}>Projects</Button>
                                    <Button color="inherit" onClick = {()=>{props.scrollTo("Blog")}}>Blog</Button>
                                    <Button color="inherit" onClick = {()=>{props.scrollTo("Contact")}}>Contact Me</Button>
                                </div>
                            </Slide>
                        </Hidden>
                        <Hidden smUp>
                            <Slide in direction = "down" timeout={600}>
                                <div>
                                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                                        onClick={handleDrawerOpen}>
                                        <MenuIcon />
                                    </IconButton>
                                </div>
                            </Slide>
                        </Hidden>
                    </Toolbar>
                </AppBar>
            </Slide>
            
            <Drawer
                anchor="bottom"
                open={drawerOpen}
                onClose = {()=>{setDrawerOpen(false)}}>
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ExpandMoreIcon style={{ fontSize: 20 ,color:'black'}}/>
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <ListItem button
                        onClick={(event) => handleListItemClick(event, 0)}>
                        <ListItemText primary="About Me" style={{color:'black'}}/>
                    </ListItem>
                    <ListItem button
                        onClick={(event) => handleListItemClick(event, 1)} >
                        <ListItemText primary="Education" style={{color:'black'}}/>
                    </ListItem>
                    <ListItem button
                        onClick={(event) => handleListItemClick(event, 2)}>
                        <ListItemText primary="Skills" style={{color:'black'}}/>
                    </ListItem>
                    <ListItem button
                        onClick={(event) => handleListItemClick(event, 3)}>
                        <ListItemText primary="Projects" style={{color:'black'}}/>
                    </ListItem>
                    <ListItem button
                        onClick={(event) => handleListItemClick(event, 4)}>
                        <ListItemText primary="Blog" style={{color:'black'}}/>
                    </ListItem>
                    <Divider/>
                    <ListItem button
                        onClick={(event) => handleListItemClick(event, 5)}>
                        <ListItemText primary="Contact" style={{color:'black'}}/>
                    </ListItem>
              </List>
            </Drawer>
        </div>)
}