import React, { FC, useCallback, useEffect, useState } from 'react';
import { setAlertMessage, getAlertMessage, initiatePastResults } from 'src/redux/SystemState';
import { useAppDispatch, useTypedSelector } from 'src/redux/store';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './assets/styles/theme';
import Routes from 'src/navigation';
import AlertModal from 'src/components/AlertModal';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

const App: FC = () => {
  const dispatch = useAppDispatch();
  const alertMessage = useTypedSelector(getAlertMessage);
  const [showModal, setShowModal] = useState<boolean>(false);

  // TODO
  useEffect(() => {
    dispatch(initiatePastResults());
  }, [dispatch]);

  const handleAlertClose = useCallback(() => {
    dispatch(setAlertMessage(''));
    setShowModal(false);
  }, [dispatch]);

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
        <Routes />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
