"use strict";
class MinHeap {
    constructor() {
        this.heap = [];
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }
    getRightChildIndex(index) {
        return 2 * index + 2;
    }
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.heap[index] < this.heap[this.getParentIndex(index)]) {
            const parentIndex = this.getParentIndex(index);
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }
    heapifyDown() {
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
    getSize() {
        return this.heap.length;
    }
    isEmpty() {
        return this.heap.length === 0;
    }
    peek() {
        return this.heap[0];
    }
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }
    removeMin() {
        if (this.isEmpty()) {
            return undefined;
        }
        const minValue = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return minValue;
    }
    print() {
        console.log(this.heap);
    }
}
