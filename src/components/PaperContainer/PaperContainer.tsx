import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './PaperContainerStyles';

export interface PaperContainerProps {
  className?: string;
  width?: string;
  maxWidth?: string;
}

const PaperContainer: FC<PaperContainerProps> = ({ className, width, maxWidth, children }) => {
  const styles = useStyles();
  return (
    <Paper classes={styles} className={className} style={{ width, maxWidth }} elevation={2}>
      {children}
    </Paper>
  );
};

export default PaperContainer;
