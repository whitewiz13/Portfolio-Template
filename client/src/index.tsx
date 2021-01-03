import React,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

//Components
import {Main} from './components/Main/Main';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const App = ()=>{
  const [loading,setLoading] = useState(false);
  const classes = useStyles();

  useEffect(()=>{
    setLoading(true);
  },[]);

  return(
    <BrowserRouter>
      {loading ? 
      <div>
        <Route path="/" exact component = {Main}/>
      </div> :<Backdrop className={classes.backdrop} open={true}>
                  <CircularProgress color="inherit" />
                </Backdrop>}
    </BrowserRouter>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
