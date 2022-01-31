import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    label: {
      color: theme.palette.text.primary,
    },
    paper: {
      backgroundColor: theme.palette.primary.main,
    },
    icon: {
      fill: theme.palette.text.primary,
    },
  };
});

export default useStyles;
