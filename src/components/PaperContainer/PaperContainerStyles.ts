import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    paperContainer: {
      padding: theme.spacing(4),
      borderRadius: theme.spacing(2),
      backgroundColor: theme.palette.secondary.dark,
    },
  };
});

export default useStyles;
