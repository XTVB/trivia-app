import React, { FC } from 'react';
import useStyles from './TitleStyles';

type TitleProps = {
  title: string;
  testId?: string;
  isSubtitle?: boolean;
};

const Title: FC<TitleProps> = ({ title, testId, isSubtitle }: TitleProps) => {
  const { classes } = useStyles();
  return !isSubtitle ? (
    <h1 data-testid={testId} className={classes.title}>
      {title}
    </h1>
  ) : (
    <h2 data-testid={testId} className={classes.subTitle}>
      {title}
    </h2>
  );
};

export default Title;
