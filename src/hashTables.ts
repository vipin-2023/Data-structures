class HashTable<K, V> {
    private buckets: Array<Array<[K, V]>>;
    private size: number;
  
    constructor(size: number = 10) {
      this.buckets = new Array(size);
      this.size = size;
    }
  
    private hash(key: K): number {
      const hashString = JSON.stringify(key);
      let hash = 0;
      for (let i = 0; i < hashString.length; i++) {
        hash = (hash << 5) + hash + hashString.charCodeAt(i);
        hash = hash & hash; // Convert to 32-bit integer
        hash = Math.abs(hash);
      }
      return hash % this.size;
    }
  
    put(key: K, value: V): void {
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
  
    get(key: K): V | undefined {
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
  
    remove(key: K): void {
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
  
    contains(key: K): boolean {
      return this.get(key) !== undefined;
    }
  }
  