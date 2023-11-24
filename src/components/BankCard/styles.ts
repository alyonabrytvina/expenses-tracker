import {
  Box,
  Card,
  CardContent,
  IconButton,
  styled,
  Typography,
} from '@mui/material';

export const StyledCardsWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingBottom: theme.spacing(8),
}));

export const StyledCardBackSurface = styled(Card)(({ theme }) => ({
  background: theme.palette.secondary.main,
  borderRadius: '24px',
  width: '80%',
  height: '187px',
  margin: '0 auto',
}));

export const StyledCardFrontSurface = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(2.5),
  borderRadius: '24px',
  background: theme.palette.secondary.dark,
  width: '100%',
  height: '187px',
  position: 'absolute',
  top: theme.spacing(4),
}));

export const StyledTitleTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey['100'],
  fontSize: '18px',
  fontWeight: 500,
  paddingBottom: theme.spacing(2),
}));

export const StyledAmountTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey['100'],
  fontSize: '30px',
  fontWeight: 700,
}));

export const StyledNumberTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey['400'],
  fontWeight: 500,
  display: 'flex',
  gap: theme.spacing(2),
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  padding: theme.spacing(3.5),
}));

export const StyledHorizIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '8px',
  right: theme.spacing(3.5),
}));

export const StyledCardLogoBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(3),
  right: theme.spacing(3.75),
}));
