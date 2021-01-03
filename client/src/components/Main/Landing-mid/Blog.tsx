import React,{useRef,forwardRef,useImperativeHandle, useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import ScrollAnimation from 'react-animate-on-scroll';
import { makeStyles } from '@material-ui/core/styles';
import {postData} from './Helper-comp/PostData';
import {NormalPost} from './Helper-comp/NormalPost';

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

export const Blog:React.FC<{setBackDrop(val),ref: any}> = forwardRef((props,ref) =>{

    const [blogList,setBlogList] = useState(null);

    const classes = useStyle();
    const blogRef = useRef(null);

    useEffect(()=>{
        postData("https://blog.sandeepthakur.co/load_posts",{cat:null}).then(data=>{
            setBlogList(data.posts);
        });
    },[]);

    useImperativeHandle(ref,()=>({
        executeScroll(){
            scrollToRef(blogRef);
        }
    }));
    return(
        <React.Fragment>
            <Paper className = {classes.mainAbout} variant="outlined" ref={blogRef}>
                <Typography component = "h3" variant="h3" style = {{textAlign:'center'}}>
                    <strong>Blog</strong>
                </Typography>
                <ScrollAnimation animateIn="zoomIn"  animateOnce = {true}>
                    {blogList!==null ?
                    <Grid container spacing={3}>
                             {blogList.reverse().slice(0,2).map((post)=>(
                                <Grid key={post.PostDetail} item xs={12} lg ={6}>
                                    <NormalPost post = {post}/>
                                </Grid>
                            ))}
                            <Grid item xs={12} lg ={12}>
                                <div style={{textAlign:'right'}}>
                                <Button size="large" onClick={()=>{
                                    props.setBackDrop(true);
                                    window.location.href = "https://blog.sandeepthakur.co"
                                }}>Visit Blog</Button>
                            </div>
                            </Grid>
                    </Grid>:<div style={{textAlign:'center'}}>
                        <CircularProgress color="inherit" />
                    </div>}
                </ScrollAnimation>
            </Paper>
        </React.Fragment>
    )
})