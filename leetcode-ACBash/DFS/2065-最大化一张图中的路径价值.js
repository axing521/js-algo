/***
 * @creater:ACBash
 * @create_time:21-11-23 17:38:49
 * @last_modify:ACBash
 * @modify_time:21-11-24 20:34:32
 * @line_count:111
 **/

/* DFS, 6000ms */
const maximalPathQuality = (values, edges, maxTime) => {
    let map = {}, ans = -Infinity;

    for(let i = 0; i < edges.length; i++){
        map[edges[i][0]] = map[edges[i][0]] || [];
        map[edges[i][0]].push({
            "next": edges[i][1],
            "time": edges[i][2]
        });

        map[edges[i][1]] = map[edges[i][1]] || [];
        map[edges[i][1]].push({
            "next": edges[i][0],
            "time": edges[i][2]
        });
    }   //建立邻接表

    const dfs = (index, value, time, memo) => {
        if(time > maxTime) return;

        if(!memo[index]) value += values[index];
        memo[index] = true;

        if(index == 0) ans = Math.max(ans, value);

        if(map[index]){
            for(let i = 0; i < map[index].length; i++){
                dfs(map[index][i].next, value, time + map[index][i].time, {...memo});
            }
        }
    };

    dfs(0, 0, 0, {});

    return ans;
}

/* 邻接矩阵会超时 */
const maximalPathQuality = (values, edges, maxTime) => {
    const n = values.length, visited = new Array(n).fill(false);
    const graph = new Array(n).fill(0).map(() => new Array(n).fill(Infinity));
    let ans = -Infinity;
    
    for(let i = 0; i < edges.length; i++){
        const u = edges[i][0], v = edges[i][1];
        graph[u][v] = edges[i][2];
        graph[v][u] = edges[i][2];
    }   //建立邻接矩阵

    const dfs = (index, value, time, visited) => {
        if(time > maxTime) return;

        if(!visited[index]) value += values[index];
        visited[index] = true;

        if(index == 0) ans = Math.max(ans, value);

        const curNode = graph[index];
        for(let i = 0; i < n; i++){
            if(curNode[i] != Infinity){
                dfs(i, value, time + curNode[i], [...visited]);
            }
        }
    };

    dfs(0, 0, 0, visited);

    return ans;
}

/* LC官方Python题解重构,160ms,DFS,回溯 */
const maximalPathQuality = (values, edges, maxTime) => {
    let graph = {}, visited = {"0": true}, ans = 0;

    for(let i = 0; i < edges.length; i++){
        const u = edges[i][0], v = edges[i][1], time = edges[i][2];

        if(!graph[u]) graph[u] = [];
        graph[u].push({
            "next": v,
            "time": time
        })
        if(!graph[v]) graph[v] = [];
        graph[v].push({
            "next": u,
            "time": time
        })
    }   //构建邻接表表示的图
    
    const dfs = (curNode, timeSum, valueSum) => {
        if(curNode == 0) ans = Math.max(ans, valueSum);

        if(!graph[curNode]) return;
        for(const {next, time} of graph[curNode]){
            if(timeSum + time <= maxTime){
                if(!visited[next]){
                    visited[next] = true;
                    dfs(next, timeSum + time, valueSum + values[next]);
                    visited[next] = false;
                }else{
                    dfs(next, timeSum + time, valueSum);
                }
            }
        }
    };

    dfs(0, 0, values[0]);

    return ans;
};