export abstract class Sorter {
  // Which every class should inherit Sorter, should have these methods, and properties
  // List all the methods, that doesn't exist in the parent class, but will be in child classes
  // For getters, we can do both of these two
  // get length(): number;
  public abstract length: number;
  public abstract compare(leftIndex: number, rightIndex: number): boolean;
  public abstract swap(leftIndex: number, rightIndex: number): void;

  public sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      // At every iteration, the biggest number will be at respective last index, so at every iteration, no need to check for the last index
      for (let j = 0; j < length - i - 1; j++) {
        // Every class that is passed in the constructor, how exactly how to compare, and swap
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
