declare class Stack<T> {
    private items;
    constructor();
    isEmpty(): boolean;
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
    clear(): void;
}
