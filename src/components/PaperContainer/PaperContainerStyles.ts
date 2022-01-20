import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 'fit-content',
    padding: theme.spacing(5, 0),
    margin: theme.spacing(5, 0),
    backgroundColor: theme.palette.background.default,
  },
}));
