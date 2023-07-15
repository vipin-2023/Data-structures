class Queue<T> {
    private items: T[];
  
    constructor() {
      this.items = [];
    }
  
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    enqueue(item: T): void {
      this.items.push(item);
    }
  
    dequeue(): T | undefined {
      return this.items.shift();
    }
  
    peek(): T | undefined {
      return this.items[0];
    }
  
    size(): number {
      return this.items.length;
    }
  
    clear(): void {
      this.items = [];
    }
  }
  