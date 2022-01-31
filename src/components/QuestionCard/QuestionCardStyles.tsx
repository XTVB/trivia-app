import { makeStyles } from 'tss-react/mui';

const circleSize = 8;

const useStyles = makeStyles()((theme) => {
  return {
    questionContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: theme.spacing(-circleSize, 0),
      gap: theme.spacing(circleSize / 2),
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: 500,
    },
    question: {
      margin: theme.spacing(circleSize / 2, 0),
      wordBreak: 'break-word',
    },
    circle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: theme.typography.fontSizeSmall,
      width: theme.spacing(circleSize),
      height: theme.spacing(circleSize),
      backgroundColor: theme.palette.primary.dark,
      borderRadius: theme.spacing(circleSize / 2),
      '&.upper': {
        transform: 'translateY(100%)',
      },
      '&.lower': {
        transform: 'translateY(-100%)',
      },
    },
  };
});

export default useStyles;
