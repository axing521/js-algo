/***
 * @creater:ACBash
 * @create_time:21-12-1 11:7:39
 * @last_modify:ACBash
 * @modify_time:22-10-16 19:35:51
 * @line_count:103
 **/

/* Lucifer,O(n^2),800ms,二分图，染色法,DFS */
const possibleBipartition = (n, dislikes) => {
    let graph = Array.from(new Array(n), () => new Array(n).fill(0));
    let colors = new Array(n).fill(0);

    const dfs = (i, color) => {
        colors[i] = color;

        for(let j = 0; j < n; j++){
            if(graph[i][j] == 1){
                if(colors[j] == color) return false;
                
                if(colors[j] == 0 && !dfs(j, -1 * color)) return false;
            }
        }

        return true;
    };

    for(const [u, v] of dislikes){
        graph[u - 1][v - 1] = 1;
        graph[v - 1][u - 1] = 1;
    }   //建立仇恨锁链

    for(let i = 0; i < n; i++){
        if(colors[i] == 0 && !dfs(i, 1)) return false;
    }

    return true;
};

/* []邻接表改进,110ms,性能很好 */
const possibleBipartition = (n, dislikes) => {
    let graph = Array.from(new Array(n), () => []);
    let colors = new Array(n).fill(0);

    for(const [u, v] of dislikes){
        graph[u - 1].push(v - 1);
        graph[v - 1].push(u - 1);
    }

    const dfs = (i, color) => {
        colors[i] = color;

        for(const next of graph[i]){
            if(colors[next] == color) return false;
            if(colors[next] == 0 && !dfs(next, -1 * color)) return false;
        }

        return true;
    };

    for(let i = 0; i < n; i++){
        if(colors[i] == 0 && !dfs(i, 1)) return false;
    }

    return true;
};

/* 看到有用并查集的，下次看看 */
class disjointSetUnion{
    constructor(n){
        this.n = n;
        this.f = Array.from({length: n}, (val, index) => index);
    }

    find(x){
        if(this.f[x] == x) return x;
        
        this.f[x] = this.find(this.f[x]);
        
        return this.f[x];
    }

    union(x, y){
        let fx = this.find(x), fy = this.find(y);

        if(fx == fy) return false;

        this.f[fy] = fx;

        return true;
    }
};

const possibleBipartition = (n, dislikes) => {
    let graph = Array.from({length: n}, () => []);
    let dsu = new disjointSetUnion(n);

    for(const [u, v] of dislikes){
        graph[u - 1].push(v - 1);
        graph[v - 1].push(u - 1);
    }

    for(let i = 0; i < n; i++){
        for(const next of graph[i]){
            if(dsu.find(i) == dsu.find(next)) return false;
            dsu.union(graph[i][0], next);
        }
    }

    return true;
};