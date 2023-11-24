import React, { FC, useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/material';
import { ChartJSOrUndefined } from 'react-chartjs-2/dist/types';
import { BarProps } from './types';

export const BarChart: FC<BarProps> = ({ data, plugins }: BarProps) => {
  const ref = useRef<ChartJSOrUndefined<'bar', (number | [number, number] | null)[]>>();

  useEffect(() => {
    if (!ref || !ref.current || !ref.current.data.datasets[0].data.length) {
      return;
    }

    ref.current.setActiveElements([{
      datasetIndex: 0,
      index: 2,
    }]);
  }, [ref.current]);

  return (
    <Box sx={{
      overflowX: 'scroll',
    }}
    >
      <Box sx={{
        height: '200px',
        width: '650px',
      }}
      >
        <Bar
          ref={ref}
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                display: false,
                grid: {
                  lineWidth: 0,
                },
              },
              x: {
                display: true,
                grid: {
                  lineWidth: 0,
                },
                ticks: {
                  font: {
                    size: 13,
                  },
                  color: '#A3A3A3',
                  maxRotation: 0,
                  major: {
                    enabled: true,
                  },
                },
              },
            },
            plugins,
          }}
        />
      </Box>
    </Box>
  );
};
