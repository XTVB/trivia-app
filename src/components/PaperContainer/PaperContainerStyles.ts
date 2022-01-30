import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      padding: theme.spacing(4),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.secondary.dark,
    },
  };
});

export default useStyles;
