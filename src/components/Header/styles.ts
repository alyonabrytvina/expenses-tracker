import {
  AppBar, Avatar, styled, Toolbar,
} from '@mui/material';

export const StyledHeader = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.default,
  boxShadow: 'none',
  padding: `${theme.spacing(5)} ${theme.spacing(3.5)} ${theme.spacing(3)}`,
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  background: theme.palette.secondary.main,
  borderRadius: '6px',
}));

export const StyledToolbar = styled(Toolbar)(() => ({
  padding: 0,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
}));
