import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  // Every class has the data property, that is what have to be sorted
  constructor(public data: string) {
    super();
  }

  public get length(): number {
    return this.data.length;
  }

  // First sorter class will call this method, if it returns true, then it will call the swap method
  public compare(leftIndex: number, rightIndex: number): boolean {
    // String chars comparison is being done by asci characters (str.charCodeAt()), that are different for uppercase chars, and lowercase chars, to convert the whole string into lowercase first
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  // If leftIndex is greater than the rightIndex (compare method returns true), then surely swap
  public swap(leftIndex: number, rightIndex: number): void {
    const charArr = this.data.split('');
    const temp = charArr[leftIndex];
    charArr[leftIndex] = charArr[rightIndex];
    charArr[rightIndex] = temp;

    this.data = charArr.join('');
  }
}
