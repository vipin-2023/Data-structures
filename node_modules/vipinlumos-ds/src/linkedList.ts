class ListNode<T> {
    data: T;
    next: ListNode<T> | null;
  
    constructor(data: T) {
      this.data = data;
      this.next = null;
    }
}
  
export class LinkedList<T> {
    private head: ListNode<T> | null;
    private tail: ListNode<T> | null;
    private size: number;
  
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    isEmpty(): boolean {
      return this.size === 0;
    }
  
    getSize(): number {
      return this.size;
    }
  
    addToHead(data: T): void {
      const newNode = new ListNode<T>(data);
      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.size++;
    }
  
    addToTail(data: T): void {
      const newNode = new ListNode<T>(data);
      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail!.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  
    removeHead(): void {
      if (this.isEmpty()) {
        throw new Error('LinkedList is empty.');
      }
      this.head = this.head!.next;
      this.size--;
      if (this.isEmpty()) {
        this.tail = null;
      }
    }
  
    removeTail(): void {
      if (this.isEmpty()) {
        throw new Error('LinkedList is empty.');
      }
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.size = 0;
        return;
      }
      let current = this.head;
      while (current?.next !== this.tail) {
        current = current?.next || null;
      }
      if (current) {
        current.next = null;
        this.tail = current;
        this.size--;
      }
    }
  
    print(): void {
      let current = this.head;
      let result = '';
      while (current !== null) {
        result += `${current.data} -> `;
        current = current.next;
      }
      result += 'null';
      console.log(result);
    }
}
  