export interface ISortProp<T> {
  property: keyof T;
  isDescending: boolean;
}
