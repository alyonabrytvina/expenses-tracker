import { createSlice } from '@reduxjs/toolkit';
import { fetchCardsThunk } from './thunks';
import { CardState } from './types';

const initialState: CardState = {
  list: [],
  selectedCard: null,
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchCardsThunk.fulfilled,
      (state, { payload }) => ({
        ...state,
        list: payload,
        selectedCard: payload[0],
      }),
    );
  },
});
export const cardReducer = cardSlice.reducer;
