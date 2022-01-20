import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0, 5, 5, 5),
    wordBreak: 'break-word',
    maxHeight: '85vh',
    maxWidth: '100%',
  },
  small: {
    width: '200px',
  },
  default: {
    width: '400px',
  },
  large: {
    top: '45%',
    width: '850px',
    overflow: 'auto',
  },
}));
