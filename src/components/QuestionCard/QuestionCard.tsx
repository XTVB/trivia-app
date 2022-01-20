import React, { FC, Fragment } from 'react';
import { Result, Question } from 'src/redux/SystemState';
import { isDefined } from 'src/utils/utils';
import Button from '../Button';
import { useStyles } from './QuestionCardStyles';

type QuestionCardProps = {
  question: Question;
  answerCallback: (result: Result) => void;
};

const QuestionCard: FC<QuestionCardProps> = ({ question, answerCallback }: QuestionCardProps) => {
  const classes = useStyles();

  const returnResult = (answer: 'True' | 'False') => {
    answerCallback({
      question: question.question,
      wasCorrect: answer === question.correct_answer,
      givenAnswer: answer,
      correctAnswer: question.correct_answer,
    });
  };
  return (
    <Fragment>
      {isDefined(question) && (
        <Fragment>
          <div dangerouslySetInnerHTML={{ __html: question.question }}></div>
          <div>
            <Button clickHandler={() => returnResult('True')}>True</Button>
            <Button clickHandler={() => returnResult('False')}>False</Button>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default QuestionCard;
