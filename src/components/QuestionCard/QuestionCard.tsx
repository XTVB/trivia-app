import React, { FC } from 'react';
import PaperContainer from 'src/components/PaperContainer';
import useStyles from './QuestionCardStyles';

type QuestionCardProps = {
  question: string;
  questionNumber: string;
};

const QuestionCard: FC<QuestionCardProps> = ({ question, questionNumber }: QuestionCardProps) => {
  const { classes } = useStyles();
  return (
    <div className={classes.questionContainer}>
      <div className={`${classes.circle} upper`}>?</div>
      <PaperContainer className={classes.paper}>
        <p className={classes.question} dangerouslySetInnerHTML={{ __html: question }} />
      </PaperContainer>
      <div className={`${classes.circle} lower`}>{questionNumber}</div>
    </div>
  );
};

export default QuestionCard;
