import React, { FC } from 'react';
import { Box } from '@mui/material';
import { Transactions } from '../../components/Transactions/Transactions';
import {
  TransactionAnalytics,
} from '../../components/TransactionAnalytics/TransactionAnalytics';

export const HomePage: FC = () => (
  <Box>
    <TransactionAnalytics />
    <Transactions />
  </Box>
);
