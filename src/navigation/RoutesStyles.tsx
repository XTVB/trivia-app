import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    layout: {
      width: '100vw',
      maxHeight: '100vh',
      overflowY: 'hidden',
      display: 'flex',
      backgroundColor: theme.palette.primary.light,
    },
    container: {
      minHeight: '100vh',
      minWidth: 0,
      flex: 1,
      display: 'flex',
      flexFlow: 'column',
    },
    loadingBar: {
      backgroundColor: theme.palette.secondary.main,
      height: '3px',
      position: 'absolute',
    },
    content: {
      flex: 1,
      width: '100%',
      padding: theme.spacing(10),
      overflowY: 'scroll',
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(5),
      },
    },
  };
});

export default useStyles;
