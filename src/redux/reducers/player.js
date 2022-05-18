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
    setName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setEmail, setName } = player.actions;
export default player.reducer;
