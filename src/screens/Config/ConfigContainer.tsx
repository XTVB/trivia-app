import { push } from 'connected-react-router';
import React, { FC, FormEvent, useEffect, useState } from 'react';
import { FieldControl, FieldGroup, FormBuilder } from 'react-reactive-form';
import Button from 'src/components/Button';
import ButtonContainer from 'src/components/ButtonContainer';
import PaperContainer from 'src/components/PaperContainer';
import SelectInput from 'src/components/SelectInput';
import { useAppDispatch, useTypedSelector } from 'src/redux/store';
import { BaseQuizSetup, beginQuiz, getCategoryList, setTitle } from 'src/redux/SystemState';
import { PATH } from 'src/utils/constants';
import useStyles from './ConfigPageStyles';

const ConfigPage: FC = () => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();

  const categoryList = useTypedSelector(getCategoryList);

  const [configForm] = useState(
    FormBuilder.group({
      questionAmount: 10,
      categoryId: -1,
      difficulty: 'easy',
      type: 'multiple',
    })
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(beginQuiz(configForm.value as BaseQuizSetup));
  };

  useEffect(() => {
    dispatch(setTitle('Configure Trivia Challenge'));
  }, [dispatch]);

  return (
    <FieldGroup
      strict={false}
      control={configForm}
      render={() => (
        <form className={classes.configContainer} onSubmit={handleSubmit}>
          <PaperContainer className={classes.inputContainer}>
            <FieldControl
              name="questionAmount"
              render={({ handler }) => (
                <SelectInput
                  options={[5, 10, 15, 20, 25, 30, 35, 40, 45, 50].map((number) => {
                    return {
                      value: number,
                      label: `${number}`,
                    };
                  })}
                  label={'Number of Questions'}
                  handler={handler()}
                />
              )}
            />
            <FieldControl
              name="categoryId"
              render={({ handler }) => (
                <SelectInput
                  options={categoryList.map(({ id, name }) => {
                    return {
                      value: id,
                      label: name,
                    };
                  })}
                  label={'Select Category'}
                  handler={handler()}
                />
              )}
            />
            <FieldControl
              name="difficulty"
              render={({ handler }) => (
                <SelectInput
                  options={[
                    {
                      value: 'easy',
                      label: 'Easy',
                    },
                    {
                      value: 'medium',
                      label: 'Medium',
                    },
                    {
                      value: 'hard',
                      label: 'Hard',
                    },
                  ]}
                  label={'Select Difficulty'}
                  handler={handler()}
                />
              )}
            />
            <FieldControl
              name="type"
              render={({ handler }) => (
                <SelectInput
                  options={[
                    {
                      value: 'boolean',
                      label: 'True / False',
                    },
                    {
                      value: 'multiple',
                      label: 'Multiple Choice',
                    },
                  ]}
                  label={'Select Type'}
                  handler={handler()}
                />
              )}
            />
          </PaperContainer>
          <ButtonContainer>
            <Button startIcon="left" clickHandler={() => dispatch(push(PATH.HOME))}>
              Back
            </Button>
            <Button type="submit" endIcon="right">
              Begin
            </Button>
          </ButtonContainer>
        </form>
      )}
    />
  );
};

export default ConfigPage;
