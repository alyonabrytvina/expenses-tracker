import React, { FC, useState } from 'react';
import { TransactionsCalendar } from '../TransactionCalendar/TransactionsCalendar';
import { BankCard } from '../BankCard/BankCard';
import { StyledBox, StyledButton } from './styles';

export const Tabs: FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('Home');

  const handleTabClick = (tabName: string) => () => {
    setSelectedTab(tabName);
  };

  return (
    <>
      <StyledBox>
        <StyledButton
          selected={selectedTab === 'Home'}
          onClick={handleTabClick('Home')}
        >
          Cards
        </StyledButton>
        <StyledButton
          selected={selectedTab === 'Calendar'}
          onClick={handleTabClick('Calendar')}
        >
          Calendar
        </StyledButton>
      </StyledBox>
      {selectedTab === 'Calendar' ? <TransactionsCalendar /> : <BankCard />}
    </>
  );
};
