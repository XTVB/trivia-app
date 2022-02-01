import React, { FC } from 'react';
import Paper from '@mui/material/Paper';
import useStyles from './PaperContainerStyles';

type PaperContainerProps = {
  className?: string;
  clickHandler?: (...arg: any) => void;
  testId?: string;
};

const PaperContainer: FC<PaperContainerProps> = ({ className, clickHandler, testId, children }) => {
  const { classes } = useStyles();

  return (
    <Paper onClick={clickHandler} data-testid={testId} className={`${className} ${classes.paperContainer}`} elevation={5}>
      {children}
    </Paper>
  );
};

export default PaperContainer;
