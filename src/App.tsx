import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container, styled } from '@mui/material';
import { HomePage } from './pages/Home/HomePage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ExpensesPage } from './pages/Expenses/ExpensesPage';
import { Tabs } from './components/Tabs/Tabs';
import { ROUTES } from './constants';

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: `${theme.spacing(15)} ${theme.spacing(3.25)} ${theme.spacing(11)}`,
}));

const App: FC = () => (
  <div className="App">
    <Header />
    <StyledContainer>
      <Tabs />
      <Routes>
        <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
        <Route path={ROUTES.EXPENSES_PAGE} element={<ExpensesPage />} />
      </Routes>
    </StyledContainer>
    <Footer />
  </div>
);

export default App;
