import React, { FC, useEffect, useState } from 'react';
import Routes from 'src/navigation';
import { useAppDispatch, useTypedSelector } from './redux/store';
import AlertModal from './components/Modal/AlertModal';
import { getAlertMessage, initiatePastResults } from 'src/redux/SystemState';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './assets/styles/theme';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

const App: FC = () => {
  const dispatch = useAppDispatch();
  const alertMessage = useTypedSelector(getAlertMessage, () => false);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    dispatch(initiatePastResults());
  }, [dispatch]);

  useEffect(() => {
    if (alertMessage.trim()) {
      setShowModal(true);
    }
  }, [alertMessage]);

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <AlertModal open={showModal} closeHandle={() => setShowModal(false)} message={alertMessage} />
        <Routes />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
