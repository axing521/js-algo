/***
 * @creater:ACBash
 * @create_time:21-11-30 12:11:40
 * @last_modify:ACBash
 * @modify_time:22-5-16 16:11:17
 * @line_count:97
 **/

/* Prim,题目可看出稠密图，性能很好 */
//visited 能确定已选顶点和未选顶点；minPaths 表示该顶点与已选顶点集合的所有边集合的最小边权值；parent 表示这条边的前溯节点
const minCostConnectPoints = (points) => {
    const n = points.length;
    let visited = new Array(n).fill(false);
    let key = new Array(n).fill(Infinity);
    let parent = new Array(n).fill(-1);
    key[0] = 0;

    const cost = ([x1, y1], [x2, y2]) => Math.abs(x1 - x2) + Math.abs(y1 - y2);

    const minKey = (key, visited) => {
        let min = Infinity, minIndex = 0;

        for(let v = 0; v < n; v++){
            if(visited[v] == false && key[v] < min){
                min = key[v];
                minIndex = v;
            }
        }

        return minIndex;
    };

    for(let i = 0; i < n; i++){
        const u = minKey(key, visited);
        visited[u] = true;

        for(let v = 0; v < n; v++){
            const costV = cost(points[u], points[v]);
            if(!visited[v] && costV < key[v]){
                key[v] = costV;
                parent[v] = u;
            }
        }
    }

    return key.reduce((prev, cur) => prev + cur, 0);
};

/* Kruskal-LC官方 */
class DisjointSetUnion{
    constructor(n){
        this.n = n;
        this.rank = new Array(n).fill(1);
        this.f = Array.from(new Array(n), (val, index) => index);
    }

    find(x){
        if(this.f[x] == x) return x;

        this.f[x] = this.find(this.f[x]);
        return this.f[x];
    }

    unionSet(x, y){
        let fx=  this.find(x), fy = this.find(y);
        if(fx == fy) return false;

        if(this.rank[fx] < this.rank[fy]) [fx, fy] = [fy, fx];

        this.rank[fx] += this.rank[fy];
        this.f[fy] = fx;

        return true;
    }
}

const minCostConnectPoints = (points) => {
    const cost = ([x1, y1], [x2, y2]) => Math.abs(x1 - x2) + Math.abs(y1 - y2);
    const n = points.length;
    const dsu = new DisjointSetUnion(n);
    const edges = [];

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            edges.push([cost(points[i], points[j]), i, j]);
        }
    }

    edges.sort((a, b) => a[0] - b[0]);

    let ans = 0, num = 0;

    for(const [len, x, y] of edges){
        if(dsu.unionSet(x, y)){
            ans += len;
            num += 1;
            
            if(num == n - 1) break;
        }
    }

    return ans;
};

/* console.log(minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]])); */