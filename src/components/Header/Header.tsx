import React, { FC, useEffect } from 'react';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchUserThunk } from '../../store/user/thunks';
import { getUserState } from '../../store/user/selectors';
import { Notifications } from '../Notifications/Notifications';
import { getPageTitle } from '../../utils/getPageTitle';
import { StyledAvatar, StyledHeader, StyledToolbar } from './styles';

export const Header: FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserState);

  const fetchUser = () => {
    dispatch(fetchUserThunk());
  };

  useEffect(fetchUser);

  return (
    <StyledHeader>
      <StyledToolbar>
        <StyledAvatar variant="rounded" src={user?.imgUrl} />
        <Typography variant="subtitle1">
          {getPageTitle(location.pathname)}
        </Typography>
        <Notifications />
      </StyledToolbar>
    </StyledHeader>
  );
};
