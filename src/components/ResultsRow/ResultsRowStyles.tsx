import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    rootContainer: {
      display: 'flex',
      flexDirection: 'row',
      border: 'solid 1px black',
      borderRadius: theme.spacing(2),
      gap: theme.spacing(10),
      [theme.breakpoints.down('sm')]: {
        gap: theme.spacing(4),
      },
      padding: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
    },
    correctAnswer: {
      backgroundColor: theme.palette.success.main,
    },
    inCorrectAnswer: {
      backgroundColor: theme.palette.error.main,
    },
    iconContainer: {
      display: 'flex',
      alignSelf: 'center',
      borderRadius: 20,
    },
    answerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1,
    },
    questionText: {
      width: '80%',
      // can use whole width on smaller screens when yourAnswers isn't displayed
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    yourAnswers: {
      display: 'flex',
      // Hide your answers on smaller screens to save screen real-estate
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      flexDirection: 'column',
      textAlign: 'right',
      gap: theme.spacing(1),
      fontSize: theme.typography.fontSizeSmall,
    },
  };
});

export default useStyles;
