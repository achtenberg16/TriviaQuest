import { createSlice } from '@reduxjs/toolkit';

const player = createSlice({
  name: 'player',
  initialState: {
    name: '',
    assertions: 0,
    score: 0,
    gravatarEmail: '',
  },
  reducers: {
    setEmail(state, action) {
      state.gravatarEmail = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setScore(state, action) {
      state.score = action.payload;
    },
    setAssertions(state, action) {
      state.assertions = action.payload;
    },
  },
});

export const { setEmail, setName, setScore, setAssertions } = player.actions;
export default player.reducer;
