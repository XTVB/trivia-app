import React, { FC } from 'react';
import Paper from '@mui/material/Paper';
import useStyles from './PaperContainerStyles';

type PaperContainerProps = {
  className?: string;
};

const PaperContainer: FC<PaperContainerProps> = ({ className, children }) => {
  const { classes } = useStyles();
  return (
    <Paper className={`${className} ${classes.paperContainer}`} elevation={5}>
      {children}
    </Paper>
  );
};

export default PaperContainer;
