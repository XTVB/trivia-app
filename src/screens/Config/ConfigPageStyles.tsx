import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    configContainer: {
      color: theme.palette.text.primary,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100%',
      gap: theme.spacing(4),
    },
    inputContainer: {
      width: 600,
      [theme.breakpoints.down('sm')]: {
        width: '80%',
      },
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(4),
    },
  };
});
export default useStyles;
