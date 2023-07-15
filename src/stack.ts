class Stack<T> {
    private items: T[];
  
    constructor() {
      this.items = [];
    }
  
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    push(item: T): void {
      this.items.push(item);
    }
  
    pop(): T | undefined {
      return this.items.pop();
    }
  
    peek(): T | undefined {
      return this.items[this.items.length - 1];
    }
  
    size(): number {
      return this.items.length;
    }
  
    clear(): void {
      this.items = [];
    }
  }
  