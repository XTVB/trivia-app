import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    rootContainer: {
      display: 'flex',
      flexDirection: 'row',
      border: 'solid 1px black',
      borderRadius: 10,
      justifyContent: 'space-between',
      // alignContent: 'space-between',
      padding: theme.spacing(2),
      // margin: theme.spacing(2, 4),
    },
    correctAnswer: {
      backgroundColor: theme.palette.success.main,
    },
    inCorrectAnswer: {
      backgroundColor: theme.palette.error.main,
    },
    iconContainer: {
      fontSize: theme.typography.fontSize,
      fontWeight: 400,
      alignSelf: 'center',
      display: 'flex',
      borderRadius: 20,
    },
    answerContainer: {
      width: '70%',
      display: 'flex',
      gap: 10,
      flexDirection: 'column',
    },
    questionText: {},
    yourAnswers: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  };
});

export default useStyles;
