/***
 * @creater:ACBash
 * @create_time:21-11-28 12:3:21
 * @last_modify:ACBash
 * @modify_time:21-11-28 21:9:24
 * @line_count:105
 **/

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