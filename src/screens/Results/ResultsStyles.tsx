import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    resultsContainer: {
      color: theme.palette.text.primary,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: theme.spacing(4),
    },
    paperContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
    },
  };
});

export default useStyles;
