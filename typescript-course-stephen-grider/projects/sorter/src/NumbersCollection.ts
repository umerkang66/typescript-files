import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  // Every class has the data property, that is what have to be sorted
  constructor(public data: number[]) {
    super();
  }

  public get length(): number {
    return this.data.length;
  }

  // First sorter class will call this method, if it returns true, then it will call the swap method
  public compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  // If leftIndex is greater than the rightIndex (compare method returns true), then surely swap
  public swap(leftIndex: number, rightIndex: number): void {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
}
