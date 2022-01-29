import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    flipCard: {
      width: 400,
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
