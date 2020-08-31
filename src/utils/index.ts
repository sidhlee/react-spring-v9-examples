/**
 * Move an element to new index and slide the rest to fill the space
 * @param arr - source array
 * @param from - from index
 * @param to - destination index
 */
export const move = (arr: any[], from: number, to: number) => {
  const rest = [...arr.slice(0, from), ...arr.slice(from + 1, arr.length)];
  return [...rest.slice(0, to), arr[from], ...rest.slice(to, rest.length)];
};

export const clamp = (number: number, min: number, max: number) => {
  return Math.min(Math.max(min, number), max);
};
