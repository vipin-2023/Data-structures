declare class Queue<T> {
    private items;
    constructor();
    isEmpty(): boolean;
    enqueue(item: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined;
    size(): number;
    clear(): void;
}
