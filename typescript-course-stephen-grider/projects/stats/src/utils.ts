export const dateStringToDate = (dateString: string): Date => {
  // 28/10/2018
  const dateParts = dateString.split('/').map((value: string): number => {
    // Convert string into number
    return parseInt(value);
  });

  // year, month, day (zero based)
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
