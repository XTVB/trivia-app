import React, { FC, Fragment, useMemo } from 'react';
import { Answer, Question, QuestionType } from 'src/redux/SystemState';
import QuestionCard from 'src/components/QuestionCard';
import Button from 'src/components/Button';
import useStyles from './QuestionContainerStyles';
import { shuffleArray } from 'src/utils';

type QuestionCardProps = {
  question: Question;
  questionType: QuestionType;
  questionNumber: string;
  answerCallback: (result: Answer) => void
};

const QuestionContainer: FC<QuestionCardProps> = ({ question: { question, correct_answer, incorrect_answers }, questionType, questionNumber, answerCallback }: QuestionCardProps) => {
  const { classes } = useStyles();

  const possibleAnswers = useMemo(()=> {
    return questionType === 'boolean'
      ? ['True', 'False']
      : shuffleArray([correct_answer, ...incorrect_answers])
  }, [questionType, correct_answer, incorrect_answers]);

  const clickHandler = (answer: string) => {
    answerCallback({
      question,
      wasCorrect: answer === correct_answer, 
      givenAnswer: answer,
      correctAnswer: correct_answer
    });
  }

  return (
    <Fragment>
      <QuestionCard question={question} questionNumber={questionNumber} />
      <section className={classes.buttonContainer}>
        {possibleAnswers.map(
          answer => <Button key={answer} clickHandler={()=>clickHandler(answer)}><div dangerouslySetInnerHTML={{__html: answer}}/></Button>
        )}
      </section>
    </Fragment>
  );
};

export default QuestionContainer;
