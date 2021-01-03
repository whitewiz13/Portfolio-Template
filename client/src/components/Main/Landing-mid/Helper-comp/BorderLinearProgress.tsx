import LinearProgress from '@material-ui/core/LinearProgress';
import {createStyles, withStyles, Theme } from '@material-ui/core/styles';

export const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#000000',
    },
  }),
)(LinearProgress);