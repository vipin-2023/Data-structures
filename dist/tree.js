"use strict";
class TreeNode {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    addChild(child) {
        this.children.push(child);
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    setRoot(data) {
        this.root = new TreeNode(data);
    }
    getRoot() {
        return this.root;
    }
}
