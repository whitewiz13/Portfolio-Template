import React,{useRef,forwardRef,useImperativeHandle} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ScrollAnimation from 'react-animate-on-scroll';
import { makeStyles,useTheme,withStyles} from '@material-ui/core/styles';
import {AllCards} from './Helper-comp/AllCards';

const scrollToRef = (ref) => {
  window.scrollTo(0, ref.current.offsetTop);
}

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}
interface Props{
  setBackdrop : (loc)=>void
  ref : any
}
const AntTabs = withStyles({
    root: {
      borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
      backgroundColor: '#000000',
    },
})(Tabs);

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            {children}
          </Box>
        )}
      </div>
    );
}
function a11yProps(index: any) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
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
    root: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
}));

export const Project:React.FC<Props> = forwardRef((props,ref) =>{
    const [value, setValue] = React.useState(1);
    const theme = useTheme();
    const classes = useStyle();
    const projRef = useRef(null);

    useImperativeHandle(ref,()=>({
      executeScroll(){
        scrollToRef(projRef);
      }
    }));

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    /*const handleChangeIndex = (index: number) => {
      setValue(index);
    };*/

    return(
    <React.Fragment>
       <Paper className = {classes.mainAbout} variant="outlined" ref={projRef}>
           <Typography component = "h3" variant="h3" style = {{textAlign:'center'}}>
                <strong>Projects</strong>
            </Typography>
            <ScrollAnimation animateIn="fadeIn"  animateOnce = {true}>
            <Grid>
            <AntTabs
                value={value}
                onChange={handleChange}
                variant="fullWidth">
            <Tab label="All" {...a11yProps(0)}/>
            <Tab label="ReactJS" {...a11yProps(1)} />
            <Tab label="Android" {...a11yProps(2)}/>
            <Tab label="Python" {...a11yProps(3)}/>
        </AntTabs>
        <div>
        <TabPanel value={value} index={0} dir={theme.direction}>
            <AllCards type = "all" setBackdrop = {props.setBackdrop}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <AllCards type = "react" setBackdrop = {props.setBackdrop}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            <AllCards type = "android" setBackdrop = {props.setBackdrop}/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
            <AllCards type ="python" setBackdrop = {props.setBackdrop}/>
        </TabPanel>
      </div>
      </Grid>
      </ScrollAnimation>
        </Paper>
    </React.Fragment>
    )
})