import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      color: theme.palette.text.primary,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100%',
    },
    instructions: {
      padding: '20px 0 50px 0',
    },
  };
});

export default useStyles;
