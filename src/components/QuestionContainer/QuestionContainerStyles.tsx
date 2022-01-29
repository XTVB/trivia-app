import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100$',
      flexWrap: 'wrap'
    },
  };
});

export default useStyles;
