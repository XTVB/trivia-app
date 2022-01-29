import React, { FC, Fragment, useMemo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Answer, Question, QuestionType } from 'src/redux/SystemState';
import QuestionCard from 'src/components/QuestionCard';
import Button from 'src/components/Button';
import useStyles from './QuestionContainerStyles';
import { isDefined, shuffleArray } from 'src/utils';
import ButtonContainer from 'src/components/ButtonContainer';

type QuestionContainerProps = {
  question: Question;
  questionType: QuestionType;
  questionNumber: string;
  answerCallback: (result: Answer) => void;
};

const QuestionContainer: FC<QuestionContainerProps> = ({
  question: { question, correct_answer, incorrect_answers },
  questionType,
  questionNumber,
  answerCallback,
}: QuestionContainerProps) => {
  const { classes } = useStyles();

  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>();

  const possibleAnswers = useMemo(() => {
    return questionType === 'boolean' ? ['True', 'False'] : shuffleArray([correct_answer, ...incorrect_answers]);
  }, [questionType, correct_answer, incorrect_answers]);

  return (
    <Fragment>
      <QuestionCard question={question} questionNumber={questionNumber} />
      <ButtonContainer>
        {possibleAnswers.map((answer) => (
          <CSSTransition
            key={answer}
            onEntered={() => {
              answer === selectedAnswer &&
                answerCallback({
                  question,
                  wasCorrect: answer === correct_answer,
                  givenAnswer: answer,
                  correctAnswer: correct_answer,
                });
            }}
            in={isDefined(selectedAnswer)}
            timeout={700}
            classNames={{
              enterActive: classes.buttonTransition,
            }}
          >
            <Button
              // Show color as primary by default, when an answer is selected change the correct answer to green, and the selected answer to red if it was incorrect
              color={
                isDefined(selectedAnswer) ? (answer === correct_answer ? 'success' : selectedAnswer === answer ? 'error' : 'primary') : 'primary'
              }
              clickHandler={() => setSelectedAnswer(answer)}
              className={classes.button}
            >
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            </Button>
          </CSSTransition>
        ))}
      </ButtonContainer>
    </Fragment>
  );
};

export default QuestionContainer;
