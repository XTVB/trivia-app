import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  button: {
    borderRadius: theme.base.borderRadius,
    fontWeight: 'bold',
    fontSize: theme.typography.fontSizeSmall,
    color: theme.palette.common.white,
    padding: `8px ${theme.spacing(8)}px`,
    cursor: 'pointer',
    transition: theme.base.transition,
    '&.default': {
      border: `${theme.base.borderThick} solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      },
    },
    '&.active': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    '&.success': {
      border: `${theme.base.borderThick} solid ${theme.palette.success.main}`,
      backgroundColor: theme.palette.success.main,
    },
    '&.disabled': {
      border: `${theme.base.borderThick} solid ${theme.palette.steel.silver}`,
      color: theme.palette.steel.silver,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      },
    },
    '&.warning': {
      border: `${theme.base.borderThick} solid ${theme.palette.warning.main}`,
      backgroundColor: theme.palette.warning.main,
    },
    '&.error': {
      border: `${theme.base.borderThick} solid ${theme.palette.error.main}`,
      backgroundColor: theme.palette.error.main,
    },
    '&.rounded': {
      borderRadius: 100,
    },
  },
}));
