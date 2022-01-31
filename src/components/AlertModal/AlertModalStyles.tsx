import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    alertContainer: {
      position: 'absolute',
      top: '45%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: theme.palette.background.default,
      borderRadius: theme.spacing(2),
      wordBreak: 'break-word',
      width: '400px',
      overflow: 'auto',
      maxHeight: '85vh',
      maxWidth: '85%',
      padding: theme.spacing(0, 4, 4, 4),
      display: 'flex',
      flexDirection: 'column',
      '&>h1': {
        alignSelf: 'center',
      },
    },
  };
});

export default useStyles;
