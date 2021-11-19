//copy from Graph-breadthFirstSearch.js, rename to "BFS"
import Graph, { Colors, initializeColor } from "../data-structure/graph/Graph.js";
import Queue from "../data-structure/queue/Queue.js";
import ArrStack from "../data-structure/stack/Stack.js";


export const BFS= (graph,startVertex,callback) => {
    const vertices=graph.vertices;
    const adjList=graph.adjList;
    const color=initializeColor(vertices);
    const queue=new Queue();
    /* <plus> */
    const distances={}; //v到u的距离distances[u]
    const predecessors={};  //前溯点
    /* </plus> */

    queue.enqueue(startVertex);

    /* <plus> */
    for(let i=0;i<vertices.length;i++){
        distances[vertices[i]]=0;
        predecessors[vertices[i]]=null; //初始化distances,predecessors
    }
    /* </plus> */

    while(!queue.isEmpty()){
        const u=queue.dequeue();
        const neighbors=adjList.get(u).value;
        color[u]=Colors.GREY;
        for(let i=0;i<neighbors.length;i++){
            const w=neighbors[i];
            if(color[w]===Colors.WHITE){
                color[w]=Colors.GREY;
                /* <plus> */
                distances[w]=distances[u]+1;
                predecessors[w]=u;
                /* </plus> */
                queue.enqueue(w);
            }
        }
        color[u]=Colors.BLACK;
        if(callback){
            callback(u);
        }
    }

    /* <plus> */
    return {
        distances,
        predecessors
    };
    /* </plus> */
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
const shortestPathA=BFS(graph,myVertices[0]);
console.log(shortestPathA);

//构建最短路径
const fromVertex=myVertices[0];
for(let i=1;i<myVertices.length;i++){
    const toVertex=myVertices[i];
    const path=new ArrStack();
    for(let v=toVertex ; v!==fromVertex ; v=shortestPathA.predecessors[v]){ //倒推回去
        path.push(v);
    }
    path.push(fromVertex);
    let s=path.pop();
    while(!path.isEmpty()){
        s+=" - "+path.pop();
    }
    console.log(s);//这个东西居然能自动换行
} */
