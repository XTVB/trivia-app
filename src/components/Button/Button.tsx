import React, { FC, ReactNode } from 'react';
import BaseButton from '@material-ui/core/Button';
import { useStyles } from './ButtonStyles';

type ButtonProps = {
  styleName?: string | any;
  rounded?: boolean;
  children: ReactNode;
  clickHandler?: (...arg: any) => void;
  ref?: React.RefObject<any>;
};

const Button: FC<ButtonProps> = ({ styleName, children, clickHandler, rounded, ref }: ButtonProps) => {
  const className = styleName ? styleName : 'default';
  const roundedClass = rounded ? 'rounded' : '';
  const classes = useStyles();

  return (
    <BaseButton ref={ref} className={`${classes.button} ${className} ${roundedClass}`} onClick={clickHandler}>
      {children}
    </BaseButton>
  );
};

export default Button;
