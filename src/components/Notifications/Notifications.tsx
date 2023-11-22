import React, { useEffect } from 'react';
import { Badge, IconButton } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { fetchNotificationsThunk } from '../../store/notification/thunks';
import { useAppDispatch, useAppSelector } from '../../store';
import { getNotificationsList } from '../../store/notification/selectors';

export function Notifications() {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector(getNotificationsList);

  const fetchNotifications = () => {
    dispatch(fetchNotificationsThunk());
  };

  useEffect(fetchNotifications);

  return (
    <IconButton
      size="large"
      aria-label={`show ${notifications.length} new notifications`}
      style={{
        color: '#000',
      }}
    >
      <Badge badgeContent={notifications.length} color="primary">
        <NotificationsNoneIcon />
      </Badge>
    </IconButton>
  );
}
