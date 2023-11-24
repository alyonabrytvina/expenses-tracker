import { Dayjs } from 'dayjs';

export const date = (dateString: string): string => {
  const fullDateArr = new Date(dateString).toString().split(' ');

  return fullDateArr
    .map((item, i) => {
      if (i === 0) {
        return `${item},`;
      }

      if (i === 1) {
        return fullDateArr[i + 1];
      }

      if (i === 2) {
        return fullDateArr[i - 1];
      }

      return item;
    })
    .slice(0, 4)
    .join(' ');
};

export const isInSameWeek = (dayA: Dayjs, dayB: Dayjs | null | undefined) => {
  if (dayB == null) {
    return false;
  }

  return dayA.isSame(dayB, 'week');
};
