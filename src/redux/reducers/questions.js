import { createSlice } from '@reduxjs/toolkit';

const questions = createSlice({
  name: 'questions',
  initialState: {
    results: undefined,
    questionNumber: 0,
  },
  reducers: {
    setQuestions(state, action) {
      state.results = action.payload;
    },
    setQuestionNumber(state, action) {
      state.questionNumber = action.payload;
    },
  },
});

export const { setQuestions, setQuestionNumber } = questions.actions;
export default questions.reducer;
