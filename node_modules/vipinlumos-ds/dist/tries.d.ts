declare class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;
    constructor();
}
declare class Trie {
    private root;
    constructor();
    insert(word: string): void;
    search(word: string): boolean;
    startsWith(prefix: string): boolean;
}
