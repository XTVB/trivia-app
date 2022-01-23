import React, { FC } from 'react';
import Paper from '@mui/material/Paper';
import useStyles from './PaperContainerStyles';

export interface PaperContainerProps {
  className?: string;
  width?: string;
  maxWidth?: string;
}

const PaperContainer: FC<PaperContainerProps> = ({ className, width, maxWidth, children }) => {
  const { classes } = useStyles();
  return (
    <Paper classes={classes} className={className} style={{ width, maxWidth }} elevation={3}>
      {children}
    </Paper>
  );
};

export default PaperContainer;
