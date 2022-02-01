import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    pastResultsContainer: {
      color: theme.palette.text.primary,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    paperContainer: {
      width: '90%',
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
    },
  };
});
export default useStyles;
