import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: theme.spacing(4),
      [theme.breakpoints.up('sm')]: {
        gap: theme.spacing(2),
      },
      width: '100%',
      flexFlow: 'row',
      flexWrap: 'wrap',
    },
  };
});

export default useStyles;
