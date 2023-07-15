declare class MinHeap {
    private heap;
    constructor();
    private getParentIndex;
    private getLeftChildIndex;
    private getRightChildIndex;
    private hasParent;
    private hasLeftChild;
    private hasRightChild;
    private swap;
    private heapifyUp;
    private heapifyDown;
    getSize(): number;
    isEmpty(): boolean;
    peek(): number | undefined;
    insert(value: number): void;
    removeMin(): number | undefined;
    print(): void;
}
