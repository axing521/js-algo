
const INF=Number.MAX_SAFE_INTEGER;
const minKey = (graph, key, visited) => {
    // Initialize min value
    let min = INF;
    let minIndex = 0;
    for (let v = 0; v < graph.length; v++) {
      if (visited[v] === false && key[v] < min) {
        min = key[v];
        minIndex = v;
      }
    }
    return minIndex;
};

const prim= graph => {
    const parent=[];
    const key=[];
    const visited=[];
    const {length}=graph;
    for(let i=0;i<length;i++){  //初始化顶点及解决与否
        key[i]=INF;
        visited[i]=false;
    }
    key[0]=0;
    parent[0]=-1;
    for(let i=0;i<length-1;i++){
        const u=minKey(graph,key,visited);
        visited[u]=true;
        for(let v=0;v<length;v++){
            if(graph[u][v] && !visited[v] && graph[u][v]<key[v]){
                parent[v]=u;
                key[v]=graph[u][v];
            }
        }
    }
    return parent;
};

var graph=[[0,2,4,0,0,0],
[2,0,2,4,2,0],
[4,2,0,0,3,0],
[0,4,0,0,3,2],
[0,2,3,3,0,2],
[0,0,0,2,2,0]];  //邻接矩阵实现图
console.log(prim(graph));