import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((_) => {
  return {
    buttonTransition: {
      transition: 'background-color 0.6s',
    },
    button: {
      width: 150,
    },
  };
});

export default useStyles;
