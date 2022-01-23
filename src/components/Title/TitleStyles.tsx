import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    title: {
      fontSize: theme.typography.fontSizeLarge,
      fontWeight: 500,
      textTransform: 'capitalize',
    },
    subTitle: {
      fontSize: theme.typography.fontSize,
      fontWeight: 400,
    },
  };
});
export default useStyles;
