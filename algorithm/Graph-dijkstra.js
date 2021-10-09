

/* var graph=[[0,2,4,0,0,0],
           [0,0,2,4,2,0],
           [0,0,0,0,3,0],
           [0,0,0,0,0,2],
           [0,0,0,3,0,2],
           [0,0,0,0,0,0]];  //邻接矩阵实现图 */

const INF=Number.MAX_SAFE_INTEGER;
const minDistance= (dist,visited) => {
    let min=INF;
    let minIndex=-1;
    for(let v=0;v<dist.length;v++){
        if(visited[v]===false && dist[v]<=min){
            min=dist[v];
            minIndex=v;
        }
    }
    return minIndex;    //选出尚未处理的顶点中最近的那一个
}

const dijkstra= (graph,src) => {
    const dist=[];
    const visited=[];
    const {length}=graph;   //解构赋值
    for(let i=0;i<length;i++){  //初始化顶点之间的距离，目标地点距离解决与否
        dist[i]=INF;
        visited[i]=false;
    }
    dist[src]=0;    //源到源的dist=0
    for(let i=0;i<length-1;i++){    //这里是不是应该是i<length?
        const u=minDistance(dist,visited);
        visited[u]=true;    //踢出最近的顶点,刚开始的u应该是src
        for(let v=0;v<length;v++){
            if(!visited[v] && graph[u][v]!==0 && dist[u]!==INF && dist[u]+graph[u][v]<dist[v]){
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }
    return dist;
}