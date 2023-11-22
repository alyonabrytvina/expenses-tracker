import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const getCardsState = (state: RootState) => state.card;

export const getCardsList = createSelector(
  getCardsState,
  (state) => state.list,
);

export const getSelectedCard = createSelector(
  getCardsState,
  (state) => state.selectedCard,
);
