import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      color: theme.palette.text.primary,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100%',
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    buttonContainer: {
      margin: theme.spacing(4),
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(2),
      },
      display: 'flex',
      justifyContent: 'center',
      '&>*:first-of-type': {
        marginRight: theme.spacing(4)
      }
    }
  };
});
export default useStyles;
