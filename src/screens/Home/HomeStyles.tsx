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
    }
  };
});
export default useStyles;
