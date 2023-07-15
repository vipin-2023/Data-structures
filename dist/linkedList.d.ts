export declare class LinkedList<T> {
    private head;
    private tail;
    private size;
    constructor();
    isEmpty(): boolean;
    getSize(): number;
    addToHead(data: T): void;
    addToTail(data: T): void;
    removeHead(): void;
    removeTail(): void;
    print(): void;
}
