import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const getTransactionsState = (state: RootState) => state.transaction;

export const getTransactionsList = createSelector(
  getTransactionsState,
  (state) => state.list,
);
