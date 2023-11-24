import { Box, styled, Typography } from '@mui/material';

export const StyledTransactionWrapper = styled(Box)(() => ({
  display: 'grid',
  gridTemplateRows: '1fr',
  gridTemplateColumns: '1fr 2fr 2fr',
}));

export const StyledTitleTypography = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 600,
}));

export const StyledSubTitleTypography = styled(Typography)(() => ({
  color: '#A3A3A3',
  fontSize: '12px',
}));

export const StyledAmountTypography = styled(Typography)(() => ({
  color: '#2BB272',
  fontSize: '18px',
  fontWeight: 600,
}));

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));
