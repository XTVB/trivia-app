import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: theme.typography.fontSizeLarge,
    fontWeight: 500,
    textTransform: 'capitalize',
  },
  subTitle: {
    fontSize: theme.typography.fontSize,
    fontWeight: 400,
  },
}));
