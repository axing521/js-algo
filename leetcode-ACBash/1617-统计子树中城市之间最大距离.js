/***
 * @creater:ACBash
 * @create_time:21-11-28 12:3:21
 * @last_modify:ACBash
 * @modify_time:22-5-14 20:17:5
 * @line_count:179
 **/

 const countSubgraphsForEachDiameter = (n, edges) => {
    //建多源最短路径矩阵
    let minPaths = Array.from({length: n}, () => new Array(n).fill(16));
    
    //自回点为0
    for(let i = 0; i < n; i++){
        minPaths[i][i] = 0;
    }

    //edges 初始化 矩阵minPaths
    for(const [u, v] of edges){
        minPaths[u - 1][v - 1] = 1;
        minPaths[v - 1][u - 1] = 1;
    }

    //floyd完成minPaths
    for(let k = 0; k < n; k++){
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                if(minPaths[i][k] != 16 && minPaths[k][j] != 16){
                    minPaths[i][j] = Math.min(minPaths[i][j], minPaths[i][k] + minPaths[k][j]);
                }
            }
        }
    }

    //DP, 二进制
    let dp = new Array(1 << n).fill(0);
    
    //edges 初始化 DP, 比如 1 ，2 节点 => 0011 状态 存储最大距离
    for(const [u, v] of edges){
        dp[(1 << (u - 1)) | (1 << (v - 1))] = 1;
    }

    //状态转移
    for(let j = 1; j < dp.length; j++){
        if(dp[j] == 0) continue;
        
        for(let i = 0; i < n; i++){
            //找与当前状态的子树的新增节点(1 << i), j & (1 << i) != 0 确保是新节点, dp[j | (1 << i)] != 0 确保不重计算新子树状态
            if((j & (1 << i)) != 0 || dp[j | (1 << i)] != 0) continue;

            for(let k = 0; k < n; k++){
                //在旧子树节点中寻找新增节点的邻居节点, 转移新子树状态
                if((j & (1 << k)) != 0 && minPaths[i][k] == 1){
                    dp[j | (1 << i)] = dp[j];
                    break;
                }
            }

            //判断是否已转移新子树状态
            if(dp[j | (1 << i)] == 0) continue;

            //奇怪的是，感觉下面有点多此一举？下次看看
            for(let kk = 0; kk < n; kk++){
                //更新最大距离
                if((j & (1 << kk)) != 0){
                    dp[j | (1 << i)] = Math.max(dp[j | (1 << i)], minPaths[i][kk]);
                }
            }
        }
    }

    let ans = new Array(n - 1).fill(0);

    for(const maxDist of dp){
        if(maxDist != 0){
            ans[maxDist - 1]++;
        }
    }

    return ans;
};

 const countSubgraphsForEachDiameter = (n, edges) => {
    const all_distances = (n, edges) => {
        let D = Array.from(new Array(n), () => new Array(n).fill(Infinity));

        for(const [u, v] of edges){
            D[u - 1][v - 1] = 1;
            D[v - 1][u - 1] = 1;
        }

        for(let i = 0; i < n; i++){
            D[i][i] = 0;
        }

        for(let k = 0; k < n; k++){
            for(let i = 0; i < n; i++){
                for(let j = 0; j < n; j++){
                    D[i][j] = Math.min(D[i][j], D[i][k] + D[k][j]);
                }
            }
        }

        return D;
    };

    const make_graph = (n, edges) => {
        let G = Array.from(new Array(n), () => []);

        for(const [u, v] of edges){
            G[u - 1].push(v - 1);
            G[v - 1].push(u - 1);
        }

        return G;
    };  //[]的邻接表

    const check_connected = (G, include) => {
        if(!include.includes(true)) return false;

        const root = include.indexOf(true);
        let visited = new Array(G.length).fill(false);
        let queue = [root];
        visited[root] = true;

        while(queue.length){
            const v = queue.shift();

            for(const x of G[v]){
                if(!visited[x] && include[x]){
                    visited[x] = true;
                    queue.push(x);
                }
            }
        }

        for(let i = 0; i < visited.length; i++){
            if(visited[i] != include[i]) return false;
        }

        return true;
    };  //BFS探索，是否联通？

    const max_distance = (D, include) => {
        let m = 0;

        for(let i = 0; i < n; i++){
            if(include[i]){
                for(let j = i; j < n; j++){
                    if(include[j]){
                        m = Math.max(m, D[i][j]);
                    }
                }
            }
        }

        return m;
    };

    const rec = (include, index, ans, G, D) => {
        if(index == n){
            if(check_connected(G, include)){
                const d = max_distance(D, include);

                if(d >= 1) ans[d - 1] += 1;
            }
        }else{
            rec(include, index + 1, ans, G, D);
            include[index] = true;
            rec(include, index + 1, ans, G, D);
            include[index] = false;
        }
    };

    const G = make_graph(n, edges);
    const D = all_distances(n, edges);
    let include = new Array(n).fill(false);
    let ans = new Array(n - 1).fill(0);

    rec(include, 0, ans, G, D);

    return ans;
};

/* LC没有JS题解,点赞了Java和python版本的，下次看看 */

console.log(countSubgraphsForEachDiameter(4, [[1,2],[2,3],[2,4]]));