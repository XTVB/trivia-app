import React, { FC, Fragment } from 'react';
import { useStyles } from './CustomIconButtonStyles';
import IconButton from '@material-ui/core/IconButton';
import Icon, { IconNames } from 'src/components/Icons';
import { Tooltip } from '@material-ui/core';

type IconButtonProps = {
  styleName?: 'primary' | 'secondary';
  border?: boolean;
  icon: IconNames;
  tooltip?: string;
  clickHandler?: (...arg: any) => void;
  ref?: React.RefObject<any>;
  size?: 'small' | 'inherit' | 'default' | 'large' | undefined;
};

const CustomIconButton: FC<IconButtonProps> = ({
  size = 'default',
  border,
  tooltip,
  styleName = 'primary',
  icon,
  clickHandler,
  ref,
}: IconButtonProps) => {
  const classes = useStyles();

  return (
    <Fragment>
      {tooltip ? (
        <Tooltip arrow title={tooltip}>
          <IconButton
            ref={ref}
            className={`
            ${classes.button} 
            ${classes[styleName]}
            ${!border && classes.noBorder}
            `}
            onClick={clickHandler}
          >
            <Icon name={icon} fontSize={size} />
          </IconButton>
        </Tooltip>
      ) : (
        <IconButton ref={ref} className={`${classes.button} ${classes[styleName]} ${!border && classes.noBorder}`} onClick={clickHandler}>
          <Icon name={icon} fontSize={size} />
        </IconButton>
      )}
    </Fragment>
  );
};

export default CustomIconButton;
