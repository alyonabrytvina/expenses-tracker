import { createAsyncThunk } from '@reduxjs/toolkit';
import notifications from './mock.json';

export const fetchNotificationsThunk = createAsyncThunk(
  'notifications/fetchAll',
  async () => notifications,
);
