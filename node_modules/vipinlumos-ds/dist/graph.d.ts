declare class Graph<T> {
    private adjacencyList;
    constructor();
    addVertex(vertex: T): void;
    addEdge(vertex1: T, vertex2: T): void;
    getNeighbors(vertex: T): T[];
}
