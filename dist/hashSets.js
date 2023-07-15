"use strict";
class HashSet {
    constructor() {
        this.items = new Set();
    }
    add(item) {
        this.items.add(item);
    }
    delete(item) {
        this.items.delete(item);
    }
    has(item) {
        return this.items.has(item);
    }
    clear() {
        this.items.clear();
    }
    size() {
        return this.items.size;
    }
    isEmpty() {
        return this.items.size === 0;
    }
    values() {
        return Array.from(this.items.values());
    }
}
