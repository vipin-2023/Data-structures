"use strict";
class HashTable {
    constructor(size = 10) {
        this.buckets = new Array(size);
        this.size = size;
    }
    hash(key) {
        const hashString = JSON.stringify(key);
        let hash = 0;
        for (let i = 0; i < hashString.length; i++) {
            hash = (hash << 5) + hash + hashString.charCodeAt(i);
            hash = hash & hash; // Convert to 32-bit integer
            hash = Math.abs(hash);
        }
        return hash % this.size;
    }
    put(key, value) {
        const index = this.hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        const bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }
        bucket.push([key, value]);
    }
    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if (!bucket) {
            return undefined;
        }
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            }
        }
        return undefined;
    }
    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if (!bucket) {
            return;
        }
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return;
            }
        }
    }
    contains(key) {
        return this.get(key) !== undefined;
    }
}
