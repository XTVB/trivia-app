import React, { FC } from 'react';
import Paper from '@mui/material/Paper';
import useStyles from './PaperContainerStyles';

type PaperContainerProps = {
  className?: string;
  testId?: string;
};

const PaperContainer: FC<PaperContainerProps> = ({ className, testId, children }) => {
  const { classes } = useStyles();
  return (
    <Paper data-testid={testId} className={`${className} ${classes.paperContainer}`} elevation={5}>
      {children}
    </Paper>
  );
};

export default PaperContainer;
