import React, { FC, useMemo } from 'react';
import useStyles from './ButtonContainerStyles';
import { ButtonProps } from 'src/components/Button';
import { paginateArray } from 'src/utils';

export interface ButtonContainerProps {
  children?: React.ReactElement<ButtonProps> | React.ReactElement<ButtonProps>[]
}

const ButtonContainer: FC<ButtonContainerProps> = ({ children }) => {
  const { classes } = useStyles();

  // const buttonRows = useMemo(()=>paginateArray(React.Children.toArray(children), 2),[children]);
  // console.log(React.Children.toArray(children));

  return (
    <section className={classes.buttonContainer}>
      {children}
    </section>
  );
};

export default ButtonContainer;
