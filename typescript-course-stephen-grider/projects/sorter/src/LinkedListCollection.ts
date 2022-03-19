import { Sorter } from './Sorter';

class Node {
  public next: Node | null = null;
  constructor(public value: number) {}
}

export class LinkedListCollection extends Sorter {
  private head: Node | null = null;

  public add(value: number): void {
    const newNode = new Node(value);

    // There is not a single node in head
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // If there are nodes attached to the head, go the last node
    let tail = this.head;
    // Once tail.next is null stop this loop, so in the next step attach the new node to the tail.next
    while (tail.next) {
      tail = tail.next;
    }

    // Attack the newly created node to last node
    tail.next = newNode;
  }

  public get length(): number {
    if (!this.head) {
      return 0;
    }

    let len = 1;
    let node = this.head;
    while (node.next) {
      len++;
      node = node.next;
    }

    return len;
  }

  private at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    // Start from zero, because we want to count for index
    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  public compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  public swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const temp = leftNode.value;
    leftNode.value = rightNode.value;
    rightNode.value = temp;
  }

  public print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}
