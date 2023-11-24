import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const getTransactionsState = (state: RootState) => state.transaction;

export const getTransactionsList = createSelector(
  getTransactionsState,
  (state) => state.list,
);

export const getLastTransactions = createSelector(
  getTransactionsList,
  (state) => [...state].sort((a, b) => {
    if (a?.date && b?.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }

    return 0;
  }).splice(0, 10),
);
