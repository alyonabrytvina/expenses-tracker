import { createSlice } from '@reduxjs/toolkit';
import { fetchTransactionsThunk } from './thunks';
import { TransactionState } from './types';

const initialState: TransactionState = {
  list: [],
};

export const transactionSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchTransactionsThunk.fulfilled,
      (state, { payload }) => ({
        ...state,
        list: payload,
      }),
    );
  },
});
export const transactionReducer = transactionSlice.reducer;
