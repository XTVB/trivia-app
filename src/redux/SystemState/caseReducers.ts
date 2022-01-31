import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { Category } from '.';
import { PastResult, Answer, SystemState, QuizSetup } from './models';

export const setTitle: CaseReducer<SystemState, PayloadAction<string>> = (state, { payload }) => {
  state.title = payload;
};

export const setAlertMessage: CaseReducer<SystemState, PayloadAction<string>> = (state, { payload }) => {
  state.alertMessage = payload;
};

export const setCurrentQuizSetup: CaseReducer<SystemState, PayloadAction<QuizSetup>> = (state, { payload }) => {
  state.currentQuizSetup = payload;
};

export const setCurrentResults: CaseReducer<SystemState, PayloadAction<Answer[]>> = (state, { payload }) => {
  state.currentResults = payload;
};

export const setPastResults: CaseReducer<SystemState, PayloadAction<PastResult[]>> = (state, { payload }) => {
  state.pastResults = payload;
};

export const setCategoryList: CaseReducer<SystemState, PayloadAction<Category[]>> = (state, { payload }) => {
  state.categoryList = payload;
};
