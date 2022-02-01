import React, { FC } from 'react';
import Title from 'src/components/Title';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'src/redux/store';
import useStyles from './TopMenuStyles';
import { getTitle } from 'src/redux/SystemState';
import Icon from 'src/components/Icons';
import { push } from 'connected-react-router';
import { PATH } from 'src/utils/constants';

const TopMenu: FC = () => {
  const dispatch = useDispatch();
  const { classes } = useStyles();

  const pageTitle = useTypedSelector(getTitle);

  return (
    <header className={classes.container}>
      <Title testId="pageTitle" title={pageTitle} />
      <div onClick={() => dispatch(push(PATH.PAST_RESULT))} className={classes.loginContainer}>
        <Icon name={'login'} />
      </div>
    </header>
  );
};

export default TopMenu;
