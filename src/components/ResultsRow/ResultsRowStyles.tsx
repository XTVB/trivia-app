import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    rootContainer: {
      display: 'flex',
      flexDirection: 'row',
      // alignContent: 'space-between',
      justifyContent: 'space-between',
      // border: 'black solid 1px',
      padding: 10,
      margin: theme.spacing(2, 4),
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
    },
    answerContainer: {
      width: '70%',
      display: 'flex',
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
