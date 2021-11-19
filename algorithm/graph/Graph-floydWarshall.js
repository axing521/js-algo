
/* var graph=[[0,2,4,0,0,0],
[0,0,2,4,2,0],
[0,0,0,0,3,0],
[0,0,0,0,0,2],
[0,0,0,3,0,2],
[0,0,0,0,0,0]];  //邻接矩阵实现图 */

const floydWarshall= graph =>{
    const dist=[];
    const {length}=graph;
    for(let i=0;i<length;i++){
        dist[i]=[];
        for(let j=0;j<length;j++){
            if(i===j){
                dist[i][j]=0;
            }else if(graph[i][j]===0){
                dist[i][j]=Infinity;
            }else{
                dist[i][j]=graph[i][j]; //一步登天
            }
        }
    }
    for(let k=0;k<length;k++){  //中间商    
        for(let i=0;i<length;i++){
            for(let j=0;j<length;j++){
                if(dist[i][k]+dist[k][j]<dist[i][j]){
                    dist[i][j]=dist[i][k]+dist[k][j];
                }
            }
        }
    }
    return dist;
};
/* console.log(floydWarshall(graph)); */