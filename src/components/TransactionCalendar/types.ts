import { PickersDayProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

export interface CustomPickerDayProps extends PickersDayProps<Dayjs> {
  isSelected: boolean;
}
