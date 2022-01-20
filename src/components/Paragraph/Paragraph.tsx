import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './ParagraphStyles';

type ParagraphProps = {
  text: string;
};

const Paragraph: FC<ParagraphProps> = ({ text }: ParagraphProps) => {
  const styles = useStyles();
  return <p className={styles.root}>{text}</p>;
};

export default Paragraph;
