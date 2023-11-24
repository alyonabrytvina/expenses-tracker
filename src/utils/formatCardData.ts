export const formatCardNumber = (cardNumber: string): string[] => {
  const formattedGroups = cardNumber.split('').reduce((accumulator: string[], digit: string) => {
    const lastGroup = accumulator.length - 1;

    if (accumulator[lastGroup]?.length < 4) {
      accumulator[lastGroup] += digit;
    } else {
      accumulator.push(digit);
    }

    return accumulator;
  }, []);

  return formattedGroups;
};

export const formatCardAmount = (cardAmount: number): string => cardAmount.toLocaleString('en', {
  style: 'currency',
  currency: 'USD',
  useGrouping: false,
}).replace(/\B(?=(\d{2})+(?!\d))/g, ',');
