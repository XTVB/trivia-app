import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      flex: '0 1 auto',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'row',
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.primary.dark,
      boxShadow: `0 0 3px 2px ${theme.palette.primary.main}`,
      padding: theme.spacing(2, 6),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2, 2),
      },
      '&>h1': {
        marginRight: 'auto',
        marginLeft: 'auto',
      },
    },
    loginContainer: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // TODO
      fontSize: 36,
      [theme.breakpoints.down('sm')]: {
        fontSize: 24,
      },
    },
  };
});

export default useStyles;
