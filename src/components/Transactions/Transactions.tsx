import React, { FC, useEffect } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store';
import { getLastTransactions } from '../../store/transaction/selectors';
import { fetchTransactionsThunk } from '../../store/transaction/thunks';
import logo from '../../assets/static/images/logo.png';
import {
  StyledAmountTypography, StyledBox,
  StyledSubTitleTypography, StyledTitleTypography,
  StyledTransactionWrapper,
} from './styles';
import { date } from '../../utils/date';

export const Transactions: FC = () => {
  const transactions = useAppSelector(getLastTransactions);
  const dispatch = useAppDispatch();

  const fetchList = () => {
    dispatch(fetchTransactionsThunk());
  };

  useEffect(fetchList);

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="subtitle1" sx={{ paddingBottom: '24px' }}>
          Transactions
        </Typography>
        <StyledSubTitleTypography>
          View All
        </StyledSubTitleTypography>
      </Box>
      <StyledBox sx={{ gap: '16px' }}>
        {transactions.map((transaction) => (
          <StyledTransactionWrapper key={transaction.id}>
            <Avatar src={logo} alt="transaction logo" sx={{ margin: '0 auto' }} />
            <StyledBox>
              <StyledTitleTypography>
                {transaction.storeName}
              </StyledTitleTypography>
              <StyledSubTitleTypography>
                {transaction.type}
              </StyledSubTitleTypography>
            </StyledBox>
            <StyledBox sx={{ alignItems: 'flex-end' }}>
              <StyledAmountTypography>
                {`$${transaction.amount}`}
              </StyledAmountTypography>
              <StyledSubTitleTypography>
                {transaction.date && date(transaction.date)}
              </StyledSubTitleTypography>
            </StyledBox>
          </StyledTransactionWrapper>
        ))}
      </StyledBox>
    </Box>
  );
};
