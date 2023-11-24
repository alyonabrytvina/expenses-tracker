import { styled } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

export const StyledDatePicker = styled(MobileDatePicker<Dayjs>)(({ theme }) => ({
  width: '116px',
  padding: `${theme.spacing(0.75)} ${theme.spacing(1.25)}`,
  background: theme.palette.primary.main,
  borderRadius: '12px',
  '& .MuiInputBase-input': {
    color: theme.palette.common.white,
    padding: 0,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 0,
  },
  '& .MuiButtonBase-root': {
    color: 'black',
  },
}));
