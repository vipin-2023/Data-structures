declare class TreeNode<T> {
    data: T;
    children: TreeNode<T>[];
    constructor(data: T);
    addChild(child: TreeNode<T>): void;
}
declare class Tree<T> {
    private root;
    constructor();
    isEmpty(): boolean;
    setRoot(data: T): void;
    getRoot(): TreeNode<T> | null;
}
