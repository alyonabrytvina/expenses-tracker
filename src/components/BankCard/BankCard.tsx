import React, { FC, useEffect } from 'react';
import { Box, useTheme } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { fetchCardsThunk } from '../../store/card/thunks';
import { getSelectedCard } from '../../store/card/selectors';
import { useAppDispatch, useAppSelector } from '../../store';
import { ReactComponent as CardLogo } from '../../assets/static/images/cards/mastercard.svg';
import { formatCardAmount, formatCardNumber } from '../../utils/formatCardData';
import {
  StyledAmountTypography,
  StyledCardBackSurface,
  StyledCardContent,
  StyledCardFrontSurface,
  StyledCardLogoBox,
  StyledCardsWrapper,
  StyledHorizIconButton,
  StyledNumberTypography,
  StyledTitleTypography,
} from './styles';

export const BankCard: FC = () => {
  const theme = useTheme();
  const card = useAppSelector(getSelectedCard);
  const dispatch = useAppDispatch();

  const fetchList = () => {
    dispatch(fetchCardsThunk());
  };

  useEffect(fetchList, []);

  return (
    <StyledCardsWrapper>
      <StyledCardBackSurface />
      <StyledCardFrontSurface>
        <StyledCardContent>
          <Box sx={{ width: '100%' }}>
            <StyledTitleTypography>
              Total Balance
            </StyledTitleTypography>
            <StyledAmountTypography>
              {card?.amount && formatCardAmount(card.amount)}
            </StyledAmountTypography>
          </Box>
          <StyledHorizIconButton>
            <MoreHorizIcon sx={{ color: theme.palette.common.white }} />
          </StyledHorizIconButton>
          <StyledNumberTypography>
            {card?.cardNumber && formatCardNumber(card.cardNumber).map((part) => (
              <Box component="span" key={part}>{part}</Box>
            ))}
          </StyledNumberTypography>
          <StyledCardLogoBox>
            <CardLogo />
          </StyledCardLogoBox>
        </StyledCardContent>
      </StyledCardFrontSurface>
    </StyledCardsWrapper>
  );
};
