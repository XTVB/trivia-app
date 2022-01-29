import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    buttonTransition: {
      transition: 'background-color 0.6s',
    },
    button: {
      width: 150,
      // flex: '1 0 auto',
      gap: theme.spacing(4)
      // margin: theme.spacing(0, 4, 4, 0)
    }
  };
});

export default useStyles;
