import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      color: theme.palette.text.primary,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100%',
    },
    flipCard: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transformStyle: 'preserve-3d',
    },
    flipCardActive: {
      transition: 'transform 0.7s',
      transform: 'rotateY(-180deg)',
    },
    cardSide: {
      minHeight: 400,
      position: 'absolute',
      backfaceVisibility: 'hidden',
      flexDirection: 'column',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    backSide: {
      transform: 'rotateY(180deg)',
    },
  };
});
export default useStyles;
