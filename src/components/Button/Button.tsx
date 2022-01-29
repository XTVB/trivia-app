import React, { FC, ReactNode } from 'react';
import BaseButton from '@mui/material/Button';
import useStyles from './ButtonStyles';
import Icon, { IconNames } from 'src/components/Icons';
import { isDefined } from 'src/utils';

export type ButtonProps = {
  startIcon?: IconNames;
  endIcon?: IconNames;
  clickHandler?: (...arg: any) => void;
  className?: string;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({ startIcon, endIcon, clickHandler, color = 'primary', className, children }: ButtonProps) => {
  const { classes } = useStyles();

  return (
    <BaseButton
      startIcon={isDefined(startIcon) && <Icon name={startIcon} />}
      endIcon={isDefined(endIcon) && <Icon name={endIcon} />}
      variant="contained"
      className={`${classes.button} ${className}`}
      onClick={clickHandler}
      color={color}
    >
      {children}
    </BaseButton>
  );
};

export default Button;
