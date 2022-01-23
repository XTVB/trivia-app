import React, { FC, Fragment } from 'react';
import { Result, Question } from 'src/redux/SystemState';
import { isDefined, shuffleArray } from 'src/utils/utils';
import Button from '../Button';
import useStyles from './QuestionCardStyles';

type QuestionCardProps = {
  question: Question;
  answerCallback: (result: Result) => void;
};

const QuestionCard: FC<QuestionCardProps> = ({
  question: { category, question, correct_answer, incorrect_answers },
  answerCallback,
}: QuestionCardProps) => {
  const { classes } = useStyles();

  const isMultipleChoice = incorrect_answers.length > 1;

  const answerOptions = isMultipleChoice ? shuffleArray([correct_answer, ...incorrect_answers]) : ['True', 'False'];

  const returnResult = (answer: string) => {
    answerCallback({
      question: question,
      wasCorrect: answer === correct_answer,
      givenAnswer: answer,
      correctAnswer: correct_answer,
    });
  };
  return (
    <Fragment>
      {isDefined(question) && (
        <Fragment>
          <div dangerouslySetInnerHTML={{ __html: question }}></div>
          <div>
            {answerOptions.map((answer) => (
              <Button key={answer} clickHandler={() => returnResult(answer)}>
                <div dangerouslySetInnerHTML={{ __html: answer }} />
              </Button>
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default QuestionCard;
