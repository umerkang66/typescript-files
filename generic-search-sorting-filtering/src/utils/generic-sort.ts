import { ISortProp } from '../interfaces';

export function genericSort<T>(
  a: T,
  b: T,
  { property, isDescending }: ISortProp<T>
): number {
  const result = () => {
    if (a[property] > b[property]) {
      return 1;
    } else if (a[property] < b[property]) {
      return -1;
    } else {
      return 0;
    }
  };

  return isDescending ? result() * -1 : result();
}
