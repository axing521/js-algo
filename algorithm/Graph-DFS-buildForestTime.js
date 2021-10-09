//copy from Graph-depthFirstSearch.js, rename to "DFS"
import Graph, { Colors, initializeColor } from "../data-structure/graph/Graph.js";

export const DFSVisit= (u,color,d,f,p,time,adjList,callback) => {
    color[u]=Colors.GREY;
    /* <plus> */
    d[u]=++time.count;
    /* </plus> */
    if(callback){
        callback(u);
    }
    const neighbors=adjList.get(u).value;
    for(let i=0 ; i<neighbors.length ; i++){
        const w=neighbors[i];
        if(color[w] === Colors.WHITE){
            /* <plus> */
            p[w]=u;
            /* </plus> */
            DFSVisit(w,color,d,f,p,time,adjList,callback);
        }
    }
    color[u]=Colors.BLACK;
    f[u]=++time.count;
};

export const DFS= (graph,callback) => {
    const vertices=graph.vertices;
    const adjList=graph.adjList;
    const color=initializeColor(vertices);
    /* <plus> */
    const d={};
    const f={};
    const p={};
    const time={count:0};

    for(let i=0 ; i<vertices.length ; i++){
        f[vertices[i]]=0;   //u的探索时间
        d[vertices[i]]=0;   //u的发现时间
        p[vertices[i]]=null;    //u的前溯点
    }
    /* </plus> */

    for(let i=0 ; i<vertices.length ; i++){ //查看所有目录顶点
        if(color[vertices[i]] === Colors.WHITE){
            DFSVisit(vertices[i],color,d,f,p,time,adjList,callback);    //little change
        }
    }
    /* <plus> */
    return {
        discovery:d,
        finished:f,
        predecessors:p
    };
    /* </plus> */
};

//应用：用返回值的时间来做 *拓扑排序*,俗称“学习路径”
/* let graph=new Graph(true);
let myVertices=["A","B","C","D","E","F"];

for(let i=0;i<myVertices;i++){
    graph.addVertex(myVertices[i]);
}
graph.addEdge("A","C");
graph.addEdge("A","D");
graph.addEdge("B","D");
graph.addEdge("B","E");
graph.addEdge("C","F");
graph.addEdge("F","E");

const result=DFS(graph);
const fTimes=result.finished;
let s="";
for(let count=0;count<myVertices.length;count++){
    let max=0;
    let maxName=null;
    for(let i=0;i<myVertices.length;i++){
        if(fTimes[myVertices[i]] > max){
            max=fTimes[myVertices[i]];
            maxName=myVertices[i];
        }
    }
    count===0 ? s+=maxName : s+=" - "+maxName;
    delete fTimes[maxName];//踢掉现在用时最长的顶点
}

console.log(s); */