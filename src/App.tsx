import React, { FC, Fragment, useCallback, useEffect, useState } from 'react';
import { setAlertMessage, getAlertMessage } from 'src/redux/SystemState';
import { useAppDispatch, useTypedSelector } from 'src/redux/store';
import { CssBaseline } from '@mui/material';
import Routes from 'src/navigation';
import AlertModal from 'src/components/AlertModal';
import { validateEnvVars } from 'src/utils';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const alertMessage = useTypedSelector(getAlertMessage);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [envConfiguredCorrectly, setEnvConfiguredCorrectly] = useState<boolean>(false);

  useEffect(() => {
    if (validateEnvVars()) {
      setEnvConfiguredCorrectly(true);
    } else {
      dispatch(setAlertMessage('Application incorrectly configured. Please contact the administrator'));
    }
  }, [dispatch]);

  const handleAlertClose = useCallback(() => {
    if (!envConfiguredCorrectly) {
      return;
    }

    dispatch(setAlertMessage(''));
    setShowModal(false);
  }, [envConfiguredCorrectly, dispatch]);

  useEffect(() => {
    if (alertMessage.trim()) {
      setShowModal(true);
    }
  }, [alertMessage]);

  return (
    <Fragment>
      <CssBaseline />
      <AlertModal open={showModal} closeHandle={handleAlertClose} message={alertMessage} />
      {envConfiguredCorrectly && <Routes />}
    </Fragment>
  );
};

export default App;
