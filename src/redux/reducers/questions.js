import { createSlice } from '@reduxjs/toolkit';

const questions = createSlice({
  name: 'questions',
  initialState: {
    response_code: 0,
    results: [],
  },
  reducers: {
    setQuestions(state, action) {
      state = action.payload;
    },
  },
});

export const { setQuestions } = questions.actions;
export default questions.reducer;
