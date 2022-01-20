import React, { FC } from 'react';
import Title from 'src/components/Title';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'src/redux/store';
import useStyles from './TopMenuStyles';
import { getTitle } from 'src/redux/SystemState';

type TopProps = {};

const TopMenu: FC<TopProps> = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const pageTitle = useTypedSelector(getTitle);

  return (
    <div className={classes.container}>
      <div className={`${classes.topMenu}`}>
        <Title title={pageTitle} isSubtitle={false} />
      </div>
    </div>
  );
};

export default TopMenu;
