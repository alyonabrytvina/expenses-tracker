import React, { FC } from 'react';
import { PickersDayProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { CustomPickersDay } from './styles';
import { isInSameWeek } from '../../utils/date';

export const Day: FC<PickersDayProps<Dayjs> & {
  selectedDay?: Dayjs | null;
}> = (props: PickersDayProps<Dayjs> & {
  selectedDay?: Dayjs | null;
}) => {
  const {
    day, selectedDay, ...other
  } = props;

  return (
    <CustomPickersDay
      {...other}
      day={day}
      disableMargin
      isSelected={isInSameWeek(day, selectedDay)}
    />
  );
};
