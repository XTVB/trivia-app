import React, { FC, ReactNode } from 'react';
import BaseButton from '@mui/material/Button';
import useStyles from './ButtonStyles';
import Icon, { IconNames } from 'src/components/Icons';
import { isDefined } from 'src/utils';

type ButtonProps = {
  startIcon?: IconNames;
  endIcon?: IconNames;
  clickHandler?: (...arg: any) => void;
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({ startIcon, endIcon, children, clickHandler }: ButtonProps) => {
  const { classes } = useStyles();

  return (
    <BaseButton
      startIcon={isDefined(startIcon) && <Icon name={startIcon} />}
      endIcon={isDefined(endIcon) && <Icon name={endIcon} />}
      variant="contained"
      className={classes.button}
      onClick={clickHandler}
    >
      {children}
    </BaseButton>
  );
};

export default Button;
