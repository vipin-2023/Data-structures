class HashSet<T> {
    private items: Set<T>;
  
    constructor() {
      this.items = new Set<T>();
    }
  
    add(item: T): void {
      this.items.add(item);
    }
  
    delete(item: T): void {
      this.items.delete(item);
    }
  
    has(item: T): boolean {
      return this.items.has(item);
    }
  
    clear(): void {
      this.items.clear();
    }
  
    size(): number {
      return this.items.size;
    }
  
    isEmpty(): boolean {
      return this.items.size === 0;
    }
  
    values(): T[] {
      return Array.from(this.items.values());
    }
  }
  