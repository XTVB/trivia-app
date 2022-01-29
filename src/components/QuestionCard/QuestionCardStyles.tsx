import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    paper: {
      width: '80%',
    },
    question: {
      wordBreak: 'break-word',
    },
    circle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: theme.typography.fontSizeSmall,
      width: 40,
      height: 40,
      backgroundColor: theme.palette.primary.dark,
      borderRadius: 20,
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
