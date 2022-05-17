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
    setEmail(state, email) {
      state.gravatarEmail = email;
    },
  },
});

export const { setEmail } = player.actions;
export default player.reducer;
