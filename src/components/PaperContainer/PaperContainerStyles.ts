import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      width: 'fit-content',
      padding: theme.spacing(5, 4),
      margin: theme.spacing(5, 0),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.secondary.dark,
    },
  };
});

export default useStyles;
