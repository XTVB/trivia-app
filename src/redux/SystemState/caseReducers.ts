import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { BeginQuizPayload, PastResult, Question, Result, SystemState } from './models';

export const setTitle: CaseReducer<SystemState, PayloadAction<string>> = (state, { payload }) => {
  state.title = payload;
};

export const setAlertMessage: CaseReducer<SystemState, PayloadAction<string>> = (state, { payload }) => {
  state.alertMessage = payload;
};

export const setCurrentQuestions: CaseReducer<SystemState, PayloadAction<Question[]>> = (state, { payload }) => {
  state.currentQuestions = payload;
};

export const setCurrentResults: CaseReducer<SystemState, PayloadAction<Result[]>> = (state, { payload }) => {
  state.currentResults = payload;
};

export const setPastResults: CaseReducer<SystemState, PayloadAction<PastResult[]>> = (state, { payload }) => {
  state.pastResults = payload;
};
