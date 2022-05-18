import { createSlice } from '@reduxjs/toolkit';

const questions = createSlice({
  name: 'questions',
  initialState: {
    results: undefined,
    questionNumber: 0,
    isAnswered: false,
  },
  reducers: {
    setQuestions(state, action) {
      state.results = action.payload;
    },
    setQuestionNumber(state, action) {
      state.questionNumber = action.payload;
    },
    setIsAnswered(state, action) {
      state.isAnswered = action.payload;
    },
  },
});

export const { setQuestions, setQuestionNumber, setIsAnswered } = questions.actions;
export default questions.reducer;
