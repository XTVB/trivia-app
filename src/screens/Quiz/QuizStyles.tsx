import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    flipCard: {
      color: theme.palette.text.primary,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      // 'safe' is only respected by a few browsers, in situations with very long questions that cause the question card to be bigger than the screen
      // just 'center' will cause the top of the question to be unreachable, safe handles this in browsers where it's supported.
      // In practice, none of the questions from opentrivia api are long enough to cause this issue except when screen height is set incredibly low
      alignItems: 'safe center',
      transformStyle: 'preserve-3d',
      gap: theme.spacing(4),
    },
    flipCardActive: {
      transition: 'transform 0.7s',
      transform: 'rotateY(-180deg)',
    },
    cardSide: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      backfaceVisibility: 'hidden',
      gap: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    backSide: {
      transform: 'rotateY(180deg)',
    },
  };
});
export default useStyles;
