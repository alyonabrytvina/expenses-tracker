import React, { FC } from 'react';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useTheme } from '@mui/material';
import { Day } from './Day';

export const TransactionsCalendar: FC = () => {
  const theme = useTheme();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        slots={{ day: Day }}
        sx={{
          marginBottom: '32px',
        }}
        slotProps={{
          day: () => ({
            selectedDay: dayjs(new Date()),
          } as any),
          calendarHeader: {
            sx: {
              position: 'relative',
              '& .MuiPickersArrowSwitcher-root': {
                width: 0,
              },
              '& .MuiPickersCalendarHeader-labelContainer': {
                margin: 'auto',
                color: theme.palette.common.black,
                fontWeight: 500,
                '& .MuiButtonBase-root': {
                  display: 'none',
                },
              },
              '& .MuiIconButton-edgeEnd': {
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
              },
              '& .MuiIconButton-edgeStart': {
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
              },
            },
          },
          leftArrowIcon: {
            sx: {
              color: '#0F172A',
              fontSize: '18px',
            },
          },
          rightArrowIcon: {
            sx: {
              color: '#0F172A',
              fontSize: '18px',
            },
          },
        }}
        minDate={dayjs(new Date(2022, 0, 1))}
        maxDate={dayjs(new Date(2023, 12, 31))}
      />
    </LocalizationProvider>
  );
};
