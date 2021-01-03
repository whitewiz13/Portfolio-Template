import React from 'react';
import Typography from '@material-ui/core/Typography';
import { LinearProgressProps } from '@material-ui/core/LinearProgress';
import {BorderLinearProgress} from './BorderLinearProgress';
import Box from '@material-ui/core/Box';

export function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <BorderLinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
}