import { createSlice } from '@reduxjs/toolkit';

const questions = createSlice({
  name: 'questions',
  initialState: {
    results: undefined,
    questionNumber: 0,
    isAnswered: false,
    query: undefined,
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
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const { setQuestions, setQuestionNumber,
  setIsAnswered, setQuery } = questions.actions;
export default questions.reducer;
