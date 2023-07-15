class Graph<T> {
    private adjacencyList: Map<T, T[]>;
  
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex: T): void {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    addEdge(vertex1: T, vertex2: T): void {
      this.addVertex(vertex1);
      this.addVertex(vertex2);
  
      const neighbors1 = this.adjacencyList.get(vertex1);
      const neighbors2 = this.adjacencyList.get(vertex2);
  
      if (neighbors1 && neighbors2) {
        neighbors1.push(vertex2);
        neighbors2.push(vertex1);
      }
    }
  
    getNeighbors(vertex: T): T[] {
      const neighbors = this.adjacencyList.get(vertex);
      return neighbors ? neighbors : [];
    }
  }
  