import React, { FC, useEffect } from 'react';
import { Badge, IconButton, useTheme } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { fetchNotificationsThunk } from '../../store/notification/thunks';
import { useAppDispatch, useAppSelector } from '../../store';
import { getNotificationsList } from '../../store/notification/selectors';

export const Notifications: FC = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
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
        color: theme.palette.common.black,
      }}
    >
      <Badge
        badgeContent={notifications.length}
        color="primary"
        sx={{
          '& .MuiBadge-badge': {
            top: '6px',
            right: '3px',
            height: '12px',
            borderRadius: '50%',
            padding: '9px 6px',
            color: theme.palette.common.white,
          },
        }}
      >
        <NotificationsNoneIcon />
      </Badge>
    </IconButton>
  );
};
