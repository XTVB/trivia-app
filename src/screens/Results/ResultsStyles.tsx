import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.steel.main,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  instructions: {
    padding: '20px 0 50px 0',
  },
}));
