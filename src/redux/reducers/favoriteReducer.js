import {createSlice} from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {},
  reducers: {
    setFavorite(state, action) {
      state.favorite = action.payload;
    },
  },
});

export const {setFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
