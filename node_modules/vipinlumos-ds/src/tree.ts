class TreeNode<T> {
    data: T;
    children: TreeNode<T>[];
  
    constructor(data: T) {
      this.data = data;
      this.children = [];
    }
  
    addChild(child: TreeNode<T>): void {
      this.children.push(child);
    }
  }
  
  class Tree<T> {
    private root: TreeNode<T> | null;
  
    constructor() {
      this.root = null;
    }
  
    isEmpty(): boolean {
      return this.root === null;
    }
  
    setRoot(data: T): void {
      this.root = new TreeNode<T>(data);
    }
  
    getRoot(): TreeNode<T> | null {
      return this.root;
    }
  }
  