import { BottomNavigation, IconButton, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  background: theme.palette.background.default,
  top: 'auto',
  bottom: 0,
  height: 'auto',
  position: 'fixed',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: `${theme.spacing(2.5)}`,
  boxShadow: '0px 0px 1px #888, 0px 10px 100px #888',
}));

export const StyledCreateIconButton = styled(IconButton)(({ theme }) => ({
  background: theme.palette.primary.main,
  height: '50px',
  width: '50px',
  borderRadius: '100%',
  '&:hover': {
    background: theme.palette.primary.main,
  },
}));

export const StyledIconButton = styled(IconButton) <{ selected?: boolean }>(
  ({ theme, selected }) => ({
    color: selected ? theme.palette.primary.main : theme.palette.grey['500'],
    '& svg': {
      color: selected ? theme.palette.primary.main : theme.palette.grey['500'],
    },
  }),
);

export const StyledCreateAddIcon = styled(AddIcon)(({ theme }) => ({
  color: theme.palette.common.white,
}));
