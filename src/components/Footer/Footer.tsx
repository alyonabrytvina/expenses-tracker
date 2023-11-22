import React from 'react';
import { BottomNavigation, IconButton, styled } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../constants';

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  background: theme.palette.background.default,
  top: 'auto',
  bottom: 0,
  height: 'auto',
  position: 'fixed',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: `${theme.spacing(2.5)}}`,
}));

const StyledCreateIconButton = styled(IconButton)(({ theme }) => ({
  background: theme.palette.primary.main,
  height: '50px',
  width: '50px',
  borderRadius: '100%',
}));

const StyledIconButton = styled(IconButton)<{ selected?: boolean }>(({ theme, selected }) => ({
  color: selected ? theme.palette.primary.main : 'grey',
}));

const StyledCreateAddIcon = styled(AddIcon)(({ theme }) => ({
  color: theme.palette.common.white,
}));

export function Footer() {
  const location = useLocation();

  return (
    <StyledBottomNavigation>
      <Link to={ROUTES.HOME_PAGE}>
        <StyledIconButton selected={ROUTES.HOME_PAGE === location.pathname}>
          <HomeIcon />
        </StyledIconButton>
      </Link>
      <Link to={ROUTES.EXPENSES_PAGE}>
        <StyledIconButton selected={ROUTES.EXPENSES_PAGE === location.pathname}>
          <CreditCardIcon />
        </StyledIconButton>
      </Link>
      <StyledCreateIconButton>
        <StyledCreateAddIcon />
      </StyledCreateIconButton>
      <StyledIconButton>
        <CalendarTodayIcon />
      </StyledIconButton>
      <StyledIconButton>
        <SettingsIcon />
      </StyledIconButton>
    </StyledBottomNavigation>
  );
}
