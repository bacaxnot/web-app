/**
 * Formats a date string to a more readable format.
 * @param date - Date string to be formatted.
 * @returns - Formatted date string.
 * @example
 * const date = '2021-01-01T00:00:00.000Z';
 * const formattedDate = dateFormatter(date);
 * console.log(formattedDate); // 1/1/2021
 */
export function dateFormatter(date: string) {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  return `${day}/${month}/${year}`;
}
