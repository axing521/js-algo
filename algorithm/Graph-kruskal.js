//这个kruskal算法有问题,不能成功找到最小生成树
const INF = Number.MAX_SAFE_INTEGER;
/* const find= (i,parent) => {
    while(parent[i]){
        i=parent[i];
    }
    return i;
}; */

const union= (i,j,parent) => {
    if(i!==j){
        parent[j]=i;
        return true;
    }
    return false;
};

const initializeCost = graph => {
    const cost = [];
    const { length } = graph;
    for (let i = 0; i < length; i++) {
      cost[i] = [];
      for (let j = 0; j < length; j++) {
        if (graph[i][j] === 0) {
          cost[i][j] = INF;
        } else {
          cost[i][j] = graph[i][j];
        }
      }
    }
    return cost;
};

const kruskal= graph => {   //graph是邻接矩阵
    const {length}=graph;
    const parent=[];
    let ne=0;
    let a,b;
    const cost=initializeCost(graph);   //copy from neighbors,0->INF
    while(ne<length-1){
        for(let i=0,min=INF;i<length;i++){  //找出权值最小的边
            for(let j=0;j<length;j++){
                if(cost[i][j]<min){
                    min=cost[i][j];
                    a=i;
                    b=j;
                }
            }
        }
        /* u=find(u,parent);
        v=find(v,parent); */
        console.log(`${a},${b}`);
        if(union(a,b,parent)){
            ne++;
        }
        cost[a][b]=cost[b][a]=INF;  //从列表中移除这些边,以免重复计算
    }
    return parent;
};

var graph=[[0,2,4,0,0,0],
[2,0,2,4,2,0],
[4,2,0,0,3,0],
[0,4,0,0,3,2],
[0,2,3,3,0,2],
[0,0,0,2,2,0]];  //邻接矩阵实现图

console.log(kruskal(graph));