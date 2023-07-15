# Vipinlumous Data Structures

This repository provides a collection of common data structure implementations in TypeScript.

## Installation

You can install the `vipinlumous-ds` package from npm using the following command:

```bash
npm install vipinlumous-ds
``` 

// Usage examples
const linkedList = new LinkedList<number>();
linkedList.addToHead(3);
linkedList.addToHead(2);
linkedList.addToHead(1);
linkedList.print();

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.size());
stack.pop();
console.log(stack.peek());
console.log(stack.size());

const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek());
console.log(queue.size());
queue.dequeue();
console.log(queue.peek());
console.log(queue.size());

const tree = new Tree<number>();
tree.setRoot(1);
const root = tree.getRoot();
if (root) {
  const child1 = new TreeNode(2);
  const child2 = new TreeNode(3);
  const child3 = new TreeNode(4);
  root.addChild(child1);
  root.addChild(child2);
  root.addChild(child3);
  console.log(root.data);
  console.log(root.children.length);
}

const graph = new Graph<string>();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
console.log(graph.getNeighbors("A"));
console.log(graph.getNeighbors("B"));
console.log(graph.getNeighbors("C"));
console.log(graph.getNeighbors("D"));
console.log(graph.getNeighbors("E"));

const trie = new Trie();
trie.insert("apple");
trie.insert("banana");
trie.insert("orange");
console.log(trie.search("apple"));
console.log(trie.search("orange"));
console.log(trie.search("grape"));
console.log(trie.startsWith("app"));
console.log(trie.startsWith("ora"));
console.log(trie.startsWith("ban"));

const hashmap = new HashMap<string, number>();
hashmap.put("apple", 1);
hashmap.put("banana", 2);
hashmap.put("orange", 3);
console.log(hashmap.get("apple"));
console.log(hashmap.get("banana"));
console.log(hashmap.get("orange"));
hashmap.remove("banana");
console.log(hashmap.contains("banana"));
console.log(hashmap.getSize());
console.log(hashmap.isEmpty());

const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(8);
minHeap.insert(3);
minHeap.insert(10);
minHeap.insert(2);
console.log(minHeap.getSize());
console.log(minHeap.peek());
console.log(minHeap.removeMin());
console.log(minHeap.removeMin());
minHeap.insert(1);
console.log(minHeap.peek());
minHeap.print();

const hashSet = new HashSet<string>();
hashSet.add("apple");
hashSet.add("banana");
hashSet.add("orange");
console.log(hashSet.has("apple"));
console.log(hashSet.has("grape"));
console.log(hashSet.size());
hashSet.delete("banana");
console.log(hashSet.values());
console.log(hashSet.isEmpty());