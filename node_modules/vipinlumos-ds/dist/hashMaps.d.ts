declare class HashMap<K, V> {
    private buckets;
    private capacity;
    constructor(capacity?: number);
    private hash;
    put(key: K, value: V): void;
    get(key: K): V | undefined;
    remove(key: K): void;
    contains(key: K): boolean;
    getSize(): number;
    isEmpty(): boolean;
}
