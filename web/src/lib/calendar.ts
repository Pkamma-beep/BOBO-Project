export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export type CalendarGrid = {
  leadingDays: number[];
  currentDays: number[];
  trailingDays: number[];
};

/** Monday-first calendar grid for the given month (0-indexed). */
export function getCalendarGrid(year: number, month: number): CalendarGrid {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const firstWeekday = new Date(year, month, 1).getDay();
  const mondayIndex = (firstWeekday + 6) % 7;

  const leadingDays = Array.from(
    { length: mondayIndex },
    (_, i) => daysInPrevMonth - mondayIndex + 1 + i
  );
  const currentDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const totalCells = mondayIndex + daysInMonth;
  const trailingCount = (7 - (totalCells % 7)) % 7;
  const trailingDays = Array.from({ length: trailingCount }, (_, i) => i + 1);

  return { leadingDays, currentDays, trailingDays };
}

export function isSameMonth(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

export function isSameDate(a: Date, b: Date): boolean {
  return isSameMonth(a, b) && a.getDate() === b.getDate();
}
