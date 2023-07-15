declare class HashTable<K, V> {
    private buckets;
    private size;
    constructor(size?: number);
    private hash;
    put(key: K, value: V): void;
    get(key: K): V | undefined;
    remove(key: K): void;
    contains(key: K): boolean;
}
