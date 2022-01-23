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
      // borderBottom: `1px solid ${theme.palette.primary.main}`,
      boxShadow: `0 0 3px 2px rgba(${theme.palette.primary.main}, 0.8)`,
      padding: theme.spacing(2, 4),
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(2, 6),
      },
      ['&>*:first-child']: {
        marginRight: 'auto',
        marginLeft: 'auto',
      },
    },
    loginContainer: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
  };
});

export default useStyles;
