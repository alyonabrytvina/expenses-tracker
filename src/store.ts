import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { cardReducer } from './store/card/slice';
import { transactionReducer } from './store/transaction/slice';
import { notificationReducer } from './store/notification/slice';
import { userReducer } from './store/user/slice';

export const store = configureStore({
  reducer: {
    card: cardReducer,
    transaction: transactionReducer,
    notification: notificationReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
