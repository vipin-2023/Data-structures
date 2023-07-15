declare class HashSet<T> {
    private items;
    constructor();
    add(item: T): void;
    delete(item: T): void;
    has(item: T): boolean;
    clear(): void;
    size(): number;
    isEmpty(): boolean;
    values(): T[];
}
