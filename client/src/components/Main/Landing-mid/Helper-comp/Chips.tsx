import React from 'react'
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper'
import {ChipList} from './ChipList';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'right',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
    },
  }),
);
function compare( a, b ) {
  return b.name.length - a.name.length
}
export const Chips = () =>{
  const classes = useStyles();
    return(
    <Paper elevation={0} className={classes.root}>
      {ChipList.sort(compare).map((chip)=>(
         <Chip key = {chip.name}
          style={{margin:'10px',backgroundColor:'black',color:'white'}}
          icon={chip.icon}
          label={chip.name}
          color="default"
          onClick={()=>{}}/>
      ))}
    </Paper>)
}