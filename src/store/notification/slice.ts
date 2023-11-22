import { createSlice } from '@reduxjs/toolkit';
import { fetchNotificationsThunk } from './thunks';
import { NotificationState } from './types';

const initialState: NotificationState = {
  list: [],
};

export const notificationSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchNotificationsThunk.fulfilled,
      (state, { payload }) => ({
        ...state,
        list: payload,
      }),
    );
  },
});
export const notificationReducer = notificationSlice.reducer;
