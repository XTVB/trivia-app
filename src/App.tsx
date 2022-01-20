import React, { FC, useEffect, useState } from 'react';
import Routes from 'src/navigation';
import { useTypedSelector } from './redux/store';
import AlertModal from './components/Modal/AlertModal';
import { getAlertMessage } from 'src/redux/SystemState';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './assets/styles/theme';

const App: FC = () => {
  const alertMessage = useTypedSelector(getAlertMessage, () => false);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (alertMessage.trim()) {
      setShowModal(true);
    }
  }, [alertMessage]);

  return (
    <ThemeProvider theme={theme}>
      <AlertModal open={showModal} closeHandle={() => setShowModal(false)} message={alertMessage} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
