import React, { CSSProperties } from 'react';
import { useStyles } from './PageHeaderStyles';

type PageHeaderProps = {
  children: JSX.Element[] | JSX.Element;
  style?: CSSProperties;
};
const PageHeader: React.FC<PageHeaderProps> = ({ children, style }: PageHeaderProps) => {
  const classes = useStyles();

  return (
    <div style={style} className={classes.pageHeader}>
      {children}
    </div>
  );
};

export default PageHeader;
