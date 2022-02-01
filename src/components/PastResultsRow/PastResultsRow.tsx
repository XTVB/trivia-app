import React, { FC, useMemo } from 'react';
import { getCategoryList, PastResult, setCurrentResults } from 'src/redux/SystemState';
import PaperContainer from 'src/components/PaperContainer';
import useStyles from './PastResultsRowStyles';
import { useAppDispatch, useTypedSelector } from 'src/redux/store';
import { push } from 'connected-react-router';
import { PATH } from 'src/utils';

type PastResultsRowProps = {
  pastResult: PastResult;
};

const PastResultsRow: FC<PastResultsRowProps> = ({
  pastResult: { date, score, results, questionAmount, difficulty, categoryId, type },
}: PastResultsRowProps) => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();

  const categoryList = useTypedSelector(getCategoryList);

  const category = useMemo(() => {
    return categoryList.find((category) => category.id === categoryId)?.name || 'Any';
  }, [categoryId, categoryList]);

  const clickHandler = () => {
    dispatch(setCurrentResults(results));
    dispatch(push(PATH.RESULTS));
  };

  return (
    <PaperContainer clickHandler={clickHandler} testId="resultRow" className={`${classes.rootContainer}`}>
      <div className={`${classes.dateContainer}`}>{`${new Date(date).toLocaleString()}`}</div>
      <div className={classes.resultDetailsContainer}>
        <div className={classes.resultDescription}>{`${questionAmount}  ${
          type === 'boolean' ? 'true or false' : 'multiple choice'
        } questions from the category ${category}`}</div>
        <div className={classes.resultDetails}>
          <div>{`Difficulty: ${difficulty}`}</div>
          <div className={classes.extraDetails}>{`Type: ${type}`}</div>
          <div className={classes.extraDetails}>{`Category: ${category}`}</div>
          <div>{`Score: ${score}`}</div>
        </div>
      </div>
    </PaperContainer>
  );
};

export default PastResultsRow;
