export class Node {
  constructor(item, next) {
    this.item = item;
    this.next = next;
  }
}
export class DoublyNode extends Node {
  constructor(item, next, prev) {
    super(item, next);
    this.prev = prev;
  }
}
