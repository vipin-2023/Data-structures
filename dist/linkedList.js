"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    addToHead(data) {
        const newNode = new ListNode(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    addToTail(data) {
        const newNode = new ListNode(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    removeHead() {
        if (this.isEmpty()) {
            throw new Error('LinkedList is empty.');
        }
        this.head = this.head.next;
        this.size--;
        if (this.isEmpty()) {
            this.tail = null;
        }
    }
    removeTail() {
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
        while ((current === null || current === void 0 ? void 0 : current.next) !== this.tail) {
            current = (current === null || current === void 0 ? void 0 : current.next) || null;
        }
        if (current) {
            current.next = null;
            this.tail = current;
            this.size--;
        }
    }
    print() {
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
exports.LinkedList = LinkedList;
