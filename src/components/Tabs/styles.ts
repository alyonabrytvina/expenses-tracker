import { Box, Button, styled } from '@mui/material';

export const StyledButton = styled(Button)<{ selected?: boolean }>(({
  theme,
  selected,
}) => ({
  color: selected ? theme.palette.common.white : '#615C5C',
  backgroundColor: selected ? theme.palette.secondary.dark : 'transparent',
  borderRadius: '64px',
  width: '120px',
  height: '40px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: selected ? theme.palette.secondary.dark : 'transparent',
  },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${theme.spacing(3)} 0`,
}));
