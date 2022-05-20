import { createSlice } from '@reduxjs/toolkit';

const settings = createSlice({
  name: 'settings',
  initialState: {
    numberOfQuestions: 5,
    category: 1,
    difficulty: 'Any Difficulty',
    type: 'Any Type',
  },
  reducers: {
    setSettings(state, action) {
      state = action.payload;
    },
  },
});

export const { setSettings } = settings.actions;
export default settings.reducer;
