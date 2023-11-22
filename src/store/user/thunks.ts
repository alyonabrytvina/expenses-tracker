import { createAsyncThunk } from '@reduxjs/toolkit';
import user from './mock.json';

export const fetchUserThunk = createAsyncThunk(
  'user/fetch',
  async () => user,
);
