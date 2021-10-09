import Graph, { Colors, initializeColor } from "../data-structure/graph/Graph.js";
import Queue from "../data-structure/queue/Queue.js";


export const breadthFirstSearch= (graph,startVertex,callback) => {
    const vertices=graph.vertices;
    const adjList=graph.adjList;
    const color=initializeColor(vertices);
    const queue=new Queue();

    queue.enqueue(startVertex);

    while(!queue.isEmpty()){
        const u=queue.dequeue();
        const neighbors=adjList.get(u).value;
        color[u]=Colors.GREY;
        for(let i=0;i<neighbors.length;i++){
            const w=neighbors[i];
            if(color[w]===Colors.WHITE){
                color[w]=Colors.GREY;
                queue.enqueue(w);
            }
        }
        color[u]=Colors.BLACK;
        if(callback){
            callback(u);
        }
    }
};

/* const graph=new Graph();
const myVertices=["A","B","C","D","E","F","G","H","I"];

for(let i=0;i<myVertices.length;i++){
    graph.addVertex(myVertices[i]);
}
graph.addEdge("A","B");
graph.addEdge("A","C");
graph.addEdge("A","D");
graph.addEdge("C","D");
graph.addEdge("C","G");
graph.addEdge("D","G");
graph.addEdge("D","H");
graph.addEdge("B","E");
graph.addEdge("B","F");
graph.addEdge("E","I");
const printVertex= value => console.log("Visited vertex: "+value);
breadthFirstSearch(graph,myVertices[0],printVertex); */