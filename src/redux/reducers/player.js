import { createSlice } from '@reduxjs/toolkit';

const player = createSlice({
  name: 'player',
  initialState: {
    name: '',
    assertions: '',
    score: '',
    gravatarEmail: '',
  },
  reducers: {
    setEmail(state, action) {
      state.gravatarEmail = action.payload;
    },
  },
});

export const { setEmail } = player.actions;
export default player.reducer;
