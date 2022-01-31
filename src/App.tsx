import React, { FC, useCallback, useEffect, useState } from 'react';
import { setAlertMessage, getAlertMessage } from 'src/redux/SystemState';
import { useAppDispatch, useTypedSelector } from 'src/redux/store';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'src/assets/styles/theme';
import Routes from 'src/navigation';
import AlertModal from 'src/components/AlertModal';
import { validateEnvVars } from 'src/utils';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

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
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AlertModal open={showModal} closeHandle={handleAlertClose} message={alertMessage} />
        {envConfiguredCorrectly && <Routes />}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
