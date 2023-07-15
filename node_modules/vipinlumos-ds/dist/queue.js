"use strict";
class Queue {
    constructor() {
        this.items = [];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    peek() {
        return this.items[0];
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
}
