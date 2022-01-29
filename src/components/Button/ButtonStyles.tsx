import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    button: {
      textTransform: 'none',
      color: theme.palette.text.primary,
    },
  };
});

export default useStyles;
