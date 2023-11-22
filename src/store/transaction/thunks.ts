import { createAsyncThunk } from '@reduxjs/toolkit';
import transactions from './mock.json';

export const fetchTransactionsThunk = createAsyncThunk(
  'transactions/fetchAll',
  async () => transactions,
);
