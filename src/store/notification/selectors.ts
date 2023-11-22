import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const getNotificationsState = (state: RootState) => state.notification;

export const getNotificationsList = createSelector(
  getNotificationsState,
  (state) => state.list,
);
