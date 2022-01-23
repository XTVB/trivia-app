import React, { FC } from 'react';
import useStyles from './TitleStyles';

type TitleProps = {
  title: string;
  isSubtitle?: boolean;
};

const Title: FC<TitleProps> = ({ title, isSubtitle }: TitleProps) => {
  const { classes } = useStyles();
  return !isSubtitle ? <h1 className={classes.title}>{title}</h1> : <h2 className={classes.subTitle}>{title}</h2>;
};

export default Title;
