import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    rootContainer: {
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'row',
      borderRadius: theme.spacing(2),
      gap: theme.spacing(10),
      [theme.breakpoints.down('sm')]: {
        gap: theme.spacing(4),
      },
      padding: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
    },
    dateContainer: {
      display: 'flex',
      alignSelf: 'center',
    },
    resultDetailsContainer: {
      wordBreak: 'break-word',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1,
      [theme.breakpoints.down('sm')]: {
        flex: '1 0.5 auto',
      },
    },
    resultDescription: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    resultDetails: {
      wordBreak: 'break-word',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'right',
      gap: theme.spacing(1),
      fontSize: theme.typography.fontSizeSmall,
    },
    extraDetails: {
      wordBreak: 'break-word',
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  };
});

export default useStyles;
