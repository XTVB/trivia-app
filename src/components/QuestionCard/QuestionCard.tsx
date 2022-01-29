import React, { FC, Fragment } from 'react';
import PaperContainer from 'src/components/PaperContainer';
import useStyles from './QuestionCardStyles';

type QuestionCardProps = {
  question: string;
  questionNumber: string;
};

const QuestionCard: FC<QuestionCardProps> = ({ question, questionNumber }: QuestionCardProps) => {
  const { classes } = useStyles();
  return (
    <Fragment>
      <div className={`${classes.circle} upper`}>?</div>
      <PaperContainer className={classes.paper}>
        {/* <div className={classes.question} dangerouslySetInnerHTML={{ __html: question }}></div> */}
        <div className={classes.question} dangerouslySetInnerHTML={{ __html: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla condimentum ornare. Curabitur viverra convallis convallis. Maecenas maximus lorem sed laoreet laoreet. Fusce ultricies augue id nulla finibus, eu porta ante finibus. Morbi molestie nunc in tincidunt consectetur. Ut suscipit luctus metus sed suscipit. Phasellus semper ac urna eu pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec nibh vestibulum, tempor eros maximus, feugiat tellus. Nam neque felis, viverra ut risus sit amet, dignissim posuere augue. Quisque imperdiet vestibulum ex. Suspendisse congue malesuada justo in suscipit. Nam viverra pretium quam, vel pulvinar sem dignissim eget. In egestas eget tellus quis pretium.` }}></div>
      </PaperContainer>
      <div className={`${classes.circle} lower`}>{questionNumber}</div>
    </Fragment>
  );
};

export default QuestionCard;
