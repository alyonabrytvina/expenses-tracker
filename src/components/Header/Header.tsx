import React, { useEffect } from 'react';
import {
  AppBar, Toolbar, Avatar, Typography, styled,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchUserThunk } from '../../store/user/thunks';
import { getUserState } from '../../store/user/selectors';
import { Notifications } from '../Notifications/Notifications';
import { getPageTitle } from '../../utils/getPageTitle';

const StyledHeader = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.default,
  boxShadow: 'none',
  padding: `${theme.spacing(5)} ${theme.spacing(3.5)} ${theme.spacing(3)}`,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  background: theme.palette.secondary.main,
  borderRadius: '6px',
}));

const StyledToolbar = styled(Toolbar)(() => ({
  padding: 0,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
}));

export function Header() {
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
}
