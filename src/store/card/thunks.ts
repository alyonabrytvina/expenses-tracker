import { createAsyncThunk } from '@reduxjs/toolkit';
import cards from './mock.json';

export const fetchCardsThunk = createAsyncThunk(
  'cards/fetchAll',
  async () => cards,
);

