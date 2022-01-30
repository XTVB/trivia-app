import React, { FC } from 'react';
import useStyles from './ButtonContainerStyles';

const ButtonContainer: FC = ({ children }) => {
  const { classes } = useStyles();

  return <section className={classes.buttonContainer}>{children}</section>;
};

export default ButtonContainer;
