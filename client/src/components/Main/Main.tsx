import React,{useRef} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

//Components
import {Header} from './Landing-start/Header';
import {LandImage} from './Landing-start/LandImage';
import {About} from './Landing-mid/About';
import {Education} from './Landing-mid/Education'
import {Skill} from './Landing-mid/Skill';
import {Project} from './Landing-mid/Project';
import {Blog} from './Landing-mid/Blog';
import {Contact} from './Landing-mid/Contact';
import {Footer} from './Landing-end/Footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
}));

export const Main = () =>{
    const classes = useStyles();

    const HeaderRef = useRef<any>();
    const AboutRef = useRef<any>();
    const EduRef = useRef<any>();
    const SkillRef = useRef<any>();
    const ProjRef = useRef<any>();
    const BlogRef = useRef<any>();
    const ContactRef = useRef<any>();

    const [backDrop,setBackdrop] = React.useState(false);

    const scrollTo = (loc)=>{
        if(loc === "About"){
            AboutRef?.current?.executeScroll();
        }else if(loc === "Edu"){
            EduRef?.current?.executeScroll();
        }else if (loc === "Skill"){
            SkillRef?.current?.executeScroll();
        }else if(loc === "Project"){
            ProjRef?.current?.executeScroll();
        }else if(loc === "Contact"){
            ContactRef?.current?.executeScroll();
        }else if(loc === "Blog"){
            BlogRef?.current?.executeScroll();
        }else{
            HeaderRef?.current?.executeScroll();
        }
    }

    return(
        <React.Fragment>
            <Header scrollTo = {scrollTo} setBackDrop = {setBackdrop}/>
            <LandImage ref = {HeaderRef} setBackdrop = {setBackdrop} scrollTo = {scrollTo}/>
            <About ref = {AboutRef} />
            <Education ref = {EduRef}/>
            <Skill ref ={SkillRef}/>
            <Project ref = {ProjRef} setBackdrop = {setBackdrop}/>
            <Blog ref ={BlogRef} setBackDrop = {setBackdrop}/>
            {/* <Contact ref = {ContactRef}/> */}
            <Footer setBackdrop = {setBackdrop}/>
            <Backdrop className={classes.backdrop} open={backDrop}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </React.Fragment>
    );
}