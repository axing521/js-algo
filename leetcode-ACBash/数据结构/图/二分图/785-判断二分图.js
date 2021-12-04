/***
 * @creater:ACBash
 * @create_time:21-12-4 16:29:37
 * @last_modify:ACBash
 * @modify_time:21-12-4 17:27:23
 * @line_count:65
 **/

/* 和LC-886一样，染色法 + DFS搞定 */
const isBipartite = (graph) => {
    const n = graph.length;
    let colors = new Array(n).fill(0);

    const dfs = (u, color) => {
        colors[u] = color;

        for(const v of graph[u]){
            if(colors[v] == colors[u]) return false;

            if(colors[v] == 0 && !dfs(v, -1 * color)) return false;
        }

        return true;
    };

    for(let i = 0; i < n; i++){
        if(colors[i] == 0 && !dfs(i, 1)) return false;
    }

    return true;
};

/* 并查集 */
/* 思路：遍历图，对于每一个顶点 i，将其所有邻居进行合并，合并到同一个联通域中。
 * 这样当发现某个顶点 i 和其邻居已经在同一个联通分量的时候可以直接返回 false，否则返回 true。 
 * * */
class UF{
    constructor(n){
        this.parent = {};
        
        for(let i = 0; i < n; i++){
            this.parent[i] = i;
        }
    }

    union(i, j){
        this.parent[this.find(i)] = this.find(j);
    }

    find(i){
        if(i == this.parent[i]) return i;
        this.parent[i] = this.find(this.parent[i]);
        return this.parent[i];
    }

    is_connected(i, j){
        return this.find(i) == this.find(j);
    }
}

const isBipartite = (graph) => {
    const n = graph.length;
    let uf = new UF(n);

    for(let i = 0; i < n; i++){
        for(const next of graph[i]){
            if(uf.is_connected(i, next)) return false;
            uf.union(graph[i][0], next);
        }
    }

    return true;
};