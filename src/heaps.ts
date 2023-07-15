class MinHeap {
    private heap: number[];
  
    constructor() {
      this.heap = [];
    }
  
    private getParentIndex(index: number): number {
      return Math.floor((index - 1) / 2);
    }
  
    private getLeftChildIndex(index: number): number {
      return 2 * index + 1;
    }
  
    private getRightChildIndex(index: number): number {
      return 2 * index + 2;
    }
  
    private hasParent(index: number): boolean {
      return this.getParentIndex(index) >= 0;
    }
  
    private hasLeftChild(index: number): boolean {
      return this.getLeftChildIndex(index) < this.heap.length;
    }
  
    private hasRightChild(index: number): boolean {
      return this.getRightChildIndex(index) < this.heap.length;
    }
  
    private swap(index1: number, index2: number): void {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    private heapifyUp(): void {
      let index = this.heap.length - 1;
      while (this.hasParent(index) && this.heap[index] < this.heap[this.getParentIndex(index)]) {
        const parentIndex = this.getParentIndex(index);
        this.swap(index, parentIndex);
        index = parentIndex;
      }
    }
  
    private heapifyDown(): void {
      let index = 0;
      while (this.hasLeftChild(index)) {
        let smallestChildIndex = this.getLeftChildIndex(index);
        if (this.hasRightChild(index) && this.heap[this.getRightChildIndex(index)] < this.heap[smallestChildIndex]) {
          smallestChildIndex = this.getRightChildIndex(index);
        }
  
        if (this.heap[index] <= this.heap[smallestChildIndex]) {
          break;
        }
  
        this.swap(index, smallestChildIndex);
        index = smallestChildIndex;
      }
    }
  
    getSize(): number {
      return this.heap.length;
    }
  
    isEmpty(): boolean {
      return this.heap.length === 0;
    }
  
    peek(): number | undefined {
      return this.heap[0];
    }
  
    insert(value: number): void {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    removeMin(): number | undefined {
      if (this.isEmpty()) {
        return undefined;
      }
  
      const minValue = this.heap[0];
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();
      this.heapifyDown();
  
      return minValue;
    }
  
    print(): void {
      console.log(this.heap);
    }
  }
  