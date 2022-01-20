import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  button: {
    padding: 8,
  },
  primary: {
    color: theme.palette.primary.main,
    border: `${theme.base.borderThick} solid ${theme.palette.primary.main}`,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
  secondary: {
    border: `${theme.base.borderThick} solid ${theme.palette.smoke.main}`,
    color: theme.palette.steel.silver,
    '&:hover': {
      border: `${theme.base.borderThick} solid ${theme.palette.smoke.main}`,
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.smoke.light,
    },
  },
  noBorder: {
    border: 'none',
    '&:hover': {
      border: 'none',
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.smoke.light,
    },
  },
}));
