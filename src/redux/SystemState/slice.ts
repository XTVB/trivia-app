import { createSlice } from '@reduxjs/toolkit';
import { SystemState } from './models';
import { setTitle, setAlertMessage, setCurrentQuizSetup, setCurrentResults, setPastResults, setCategoryList } from './caseReducers';

const initialState: SystemState = {
  title: 'Welcome to the Trivia Challenge!',
  alertMessage: '',
  currentQuizSetup: {
    questions: [],
    difficulty: 'hard',
    categoryId: -1,
    questionAmount: 0,
    type: 'boolean',
  },
  currentResults: [],
  pastResults: [],
  categoryList: [],
};

export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    setTitle,
    setAlertMessage,
    setCurrentQuizSetup,
    setCurrentResults,
    setPastResults,
    setCategoryList,
  },
});
