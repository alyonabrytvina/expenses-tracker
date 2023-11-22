import { createSlice } from '@reduxjs/toolkit';
import { fetchUserThunk } from './thunks';
import { UserState } from './types';

const initialState: UserState = {
  userData: null,
};

export const userSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUserThunk.fulfilled,
      (state, { payload }) => ({
        ...state,
        userData: payload,
      }),
    );
  },
});
export const userReducer = userSlice.reducer;
