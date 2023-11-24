import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../constants';
import {
  StyledBottomNavigation, StyledCreateAddIcon,
  StyledCreateIconButton,
  StyledIconButton,
} from './styles';
import { ReactComponent as SettingsIcon } from '../../assets/static/images/icons/setting-icon.svg';
import { ReactComponent as CalendarIcon } from '../../assets/static/images/icons/calendar-icon.svg';
import { ReactComponent as CreditCardIcon } from '../../assets/static/images/icons/credit-card-icon.svg';
import { ReactComponent as HomeIcon } from '../../assets/static/images/icons/home-icon.svg';

export const Footer: FC = () => {
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
        <CalendarIcon />
      </StyledIconButton>
      <StyledIconButton>
        <SettingsIcon />
      </StyledIconButton>
    </StyledBottomNavigation>
  );
};
