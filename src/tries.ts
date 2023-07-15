class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;
  
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    private root: TrieNode;
  
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word: string): void {
      let currentNode = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
  
        if (!currentNode.children.has(char)) {
          currentNode.children.set(char, new TrieNode());
        }
  
        currentNode = currentNode.children.get(char)!;
      }
  
      currentNode.isEndOfWord = true;
    }
  
    search(word: string): boolean {
      let currentNode = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
  
        if (!currentNode.children.has(char)) {
          return false;
        }
  
        currentNode = currentNode.children.get(char)!;
      }
  
      return currentNode.isEndOfWord;
    }
  
    startsWith(prefix: string): boolean {
      let currentNode = this.root;
  
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
  
        if (!currentNode.children.has(char)) {
          return false;
        }
  
        currentNode = currentNode.children.get(char)!;
      }
  
      return true;
    }
  }
  