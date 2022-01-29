import React, { FC } from 'react';
import Paper from '@mui/material/Paper';
import useStyles from './PaperContainerStyles';

export interface PaperContainerProps {
  className?: string;
}

const PaperContainer: FC<PaperContainerProps> = ({ className, children }) => {
  const { classes } = useStyles();
  return (
    <Paper classes={classes} className={className} elevation={5}>
      {children}
    </Paper>
  );
};

export default PaperContainer;
