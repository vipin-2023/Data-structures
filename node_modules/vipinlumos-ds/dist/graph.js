"use strict";
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }
    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        const neighbors1 = this.adjacencyList.get(vertex1);
        const neighbors2 = this.adjacencyList.get(vertex2);
        if (neighbors1 && neighbors2) {
            neighbors1.push(vertex2);
            neighbors2.push(vertex1);
        }
    }
    getNeighbors(vertex) {
        const neighbors = this.adjacencyList.get(vertex);
        return neighbors ? neighbors : [];
    }
}
