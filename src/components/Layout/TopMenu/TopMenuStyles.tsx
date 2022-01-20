import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: '0 1 auto',
  },
  topMenu: {
    borderBottom: theme.base.border,
    flexDirection: 'row',
    ...theme.mixins.flexCentered(),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.steel.main,
    padding: theme.spacing(2, 4),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2, 6),
    },
  },
}));

export default useStyles;
