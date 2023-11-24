import React, { FC, useMemo, useState } from 'react';
import {
  Box, InputAdornment, Typography, useTheme,
} from '@mui/material';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useAppSelector } from '../../store';
import { getTransactionsList } from '../../store/transaction/selectors';
import { months } from '../../constants';
import { BarChart } from '../BarChart/BarChart';
import { StyledDatePicker } from './styles';

Chart.register(...registerables, ChartDataLabels);

export const TransactionAnalytics: FC = () => {
  const transactions = useAppSelector(getTransactionsList);

  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs(new Date()));

  const totalAmountByMonths = transactions.reduce((acc: Record<string, number>, transaction) => {
    const monthIndex = new Date(transaction.date).getMonth();
    const month = months[monthIndex];

    const selectedYear = new Date(transaction.date).getFullYear();

    if (selectedYear === selectedDate.year()) {
      if (!acc[month]) {
        acc[month] = transaction.amount;
      } else {
        acc[month] += transaction.amount;
      }
    }

    return acc;
  }, {});

  const plugins = useMemo(() => ({
    title: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      display: false,
    },
    datalabels: {
      display: true,
      color: (bar: Context) => (bar.active ? '#8234F8' : '#A3A3A3'),
      anchor: 'end' as const,
      offset: -20,
      align: 'start' as const,
      formatter: (value: number):string => value.toLocaleString('en', {
        style: 'currency',
        currency: 'USD',
        useGrouping: true,
        maximumFractionDigits: 0,
      }),
    },
  }), []);

  const chartData = {
    labels: months,
    datasets: [
      {
        data: Object.values(totalAmountByMonths),
        backgroundColor: (c: Context) => (c.active ? '#8234F8' : '#FAFAFA'),
        borderRadius: 6,
      }],
  };

  const theme = useTheme();

  const onChangeDate = (value: Dayjs | null) => setSelectedDate(dayjs(value));

  return (
    <Box sx={{ paddingBottom: '32px' }}>
      <Box sx={{
        display: 'flex', justifyContent: 'space-between', paddingBottom: '24px',
      }}
      >
        <Typography variant="subtitle1">
          Analytics
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StyledDatePicker
            views={['year']}
            value={selectedDate}
            onChange={onChangeDate}
            minDate={dayjs(new Date(2022, 0, 1))}
            maxDate={dayjs(new Date(2023, 11, 31))}
            slotProps={{
              textField: {
                InputProps: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <ArrowDropDownIcon sx={{ color: theme.palette.common.white }} />
                    </InputAdornment>
                  ),
                },
              },
            }}
          />
        </LocalizationProvider>
      </Box>
      <BarChart data={chartData} plugins={plugins} />
    </Box>
  );
};
