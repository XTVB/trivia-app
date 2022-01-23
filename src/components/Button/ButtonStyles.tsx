import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    button: {
      textTransform: 'none',
      color: theme.palette.text.primary,
      // '&.default': {
      //   border: `${theme.base.borderThick} solid ${theme.palette.primary.main}`,
      //   color: theme.palette.primary.main,
      //   '&:hover': {
      //     backgroundColor: theme.palette.primary.main,
      //     color: theme.palette.common.white,
      //   },
      // },
    },
  };
});

export default useStyles;
