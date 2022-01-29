import React, { FC } from 'react';
import Title from 'src/components/Title';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'src/redux/store';
import useStyles from './TopMenuStyles';
import { getTitle } from 'src/redux/SystemState';
import Icon from 'src/components/Icons';
import { push } from 'connected-react-router';
import { PATH } from 'src/utils/constants';

type TopProps = {};

const TopMenu: FC<TopProps> = () => {
  const dispatch = useDispatch();
  const { classes } = useStyles();

  const pageTitle = useTypedSelector(getTitle);

  return (
    <header className={classes.container}>
      <Title title={pageTitle} isSubtitle={false} />
      <div onClick={() => dispatch(push(PATH.PAST_RESULT))} className={classes.loginContainer}>
        <Icon name={'login'} fontSize="large" />
      </div>
    </header>
  );
};

export default TopMenu;
