import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontWeight: 300,
    color: theme.palette.steel.main,
    margin: theme.spacing(5, 0, 0, 0),
  },
}));
