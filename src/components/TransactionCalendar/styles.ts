import { styled } from '@mui/material';
import { PickersDay } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import React from 'react';
import { CustomPickerDayProps } from './types';

export const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<CustomPickerDayProps>(({
  theme, isSelected, day,
}) => ({
  border: 0,
  borderRadius: '8px',
  padding: `${theme.spacing(1.5)} ${theme.spacing(1.25)} ${theme.spacing(1)}`,
  height: '50px',
  color: '#615C5C',
  display: 'flex',
  alignItems: 'baseline',
  ...(isSelected && day.day() <= dayjs(new Date()).day() && {
    '&::before': {
      content: '" "',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: theme.palette.primary.main,
      display: 'inline-block',
      position: 'absolute',
      bottom: '10px',
    },
  }),
  ...(isSelected && day.date() === dayjs(new Date()).date() && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 600,
    '&::before': {
      content: '" "',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: theme.palette.common.white,
      display: 'inline-block',
      position: 'absolute',
      bottom: '10px',
    },
  }),
  ...(day.day() === 0 && {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  }),
  ...(day.day() === 6 && {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  }),
  '&:not(.Mui-selected)': {
    border: 0,
    display: 'flex',
    alignItems: 'baseline',
  },
})) as React.ComponentType<CustomPickerDayProps>;
