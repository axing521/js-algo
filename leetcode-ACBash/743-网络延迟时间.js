/***
 * @creater:ACBash
 * @create_time:21-11-23 10:56:48
 * @last_modify:ACBash
 * @modify_time:21-11-23 17:38:51
 * @line_count:86
 **/

//times数组记录图中的所有“边”信息 => [u, v, w];
//Dijkstra，三要素：1.graph，2.minPaths，3.visited
const networkDelayTime = (times, n, k) => {
    //初始化邻接矩阵
    const graph = new Array(n).fill(0).map(val => new Array(n).fill(Infinity));
    
    for(const time of times){
        const u = time[0] - 1, v = time[1] - 1;
        graph[u][v] = time[2];
    }

    //初始化minPaths
    let minPaths = new Array(n).fill(Infinity), visited = new Array(n).fill(false);
    minPaths[k - 1] = 0;

    for(let i = 0; i < n; i++){
        let u = -1;

        for(let v = 0; v < n; v++){
            if(!visited[v] && (u == -1 || minPaths[v] < minPaths[u])){
                u = v;
            }
        }

        visited[u] = true;  //找一个确定节点进入

        for(let v = 0; v < n; v++){
            minPaths[v] = Math.min(minPaths[v], minPaths[u] + graph[u][v]);
        }   //由此次的确定节点更新所有minPath
    }

    const ans = Math.max(...minPaths);

    return ans == Infinity ? -1 : ans;
};

/* Dijkstra，graph用邻接表写 */
const networkDelayTime = (times, n, k) => {
    //初始化邻接矩阵
    const graph = new Map();
    
    for(const time of times){
        const u = time[0] - 1, v = time[1] - 1;

        if(!graph.has(u)) graph.set(u, new Map());
        const uAdjList = graph.get(u);

        uAdjList.set(v, time[2]);
    }
    
    //初始化minPaths
    let minPaths = new Array(n).fill(Infinity), visited = new Array(n).fill(false);
    minPaths[k - 1] = 0;

    for(let i = 0; i < n; i++){
        let u = -1;

        for(let v = 0; v < n; v++){
            if(!visited[v] && (u == -1 || minPaths[v] < minPaths[u])){
                u = v;
            }
        }

        visited[u] = true;  //找一个确定节点进入
        
        for(let v = 0; v < n; v++){
            if(graph.get(u) && graph.get(u).get(v) >= 0){
                minPaths[v] = Math.min(minPaths[v], minPaths[u] + graph.get(u).get(v));
            }
        }   //由此次的确定节点更新所有minPath
    }

    const ans = Math.max(...minPaths);

    return ans == Infinity ? -1 : ans;
};

/* 找最近节点的时候可以用最小堆，下次试试看 */

/* 还有BFS的 */

/* floyd */

/* bellman */

/* SPFA */