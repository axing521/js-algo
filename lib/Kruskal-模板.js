/***
 * @creater:ACBash
 * @create_time:22-5-19 13:17:23
 * @last_modify:ACBash
 * @modify_time:22-5-19 16:10:56
 * @line_count:60
 **/

/* 以LC-1584为例, 最小生成树可用 选择的 edges 表示 */
/* 并查集 */
class DisjointSetUnion{
    constructor(n){
        this.n = n;
        this.rank = new Array(n).fill(1);
        this.f = Array.from({length: n}, (val, index) => index);
    }

    find(x){
        if(this.f[x] == x) return x;

        this.f[x] = this.find(this.f[x]);

        return this.f[x];
    }

    unionSet(x, y){
        let fx = this.find(x), fy = this.find(y);

        if(fx == fy) return false;

        if(this.rank[fx] < this.rank[fy]) [fx, fy] = [fy, fx];

        this.rank[fx] += this.rank[fy];

        this.f[fy] = fx;

        return true;
    }
}

const minCostConnectPoints = (points) => {
    const n = points.length;
    let edges = [];

    const cost = ([x1, y1], [x2, y2]) => Math.abs(x1 - x2) + Math.abs(y1 - y2);

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            edges.push([cost(points[i], points[j]), i, j]);
        }
    }

    edges.sort((a, b) => a[0] - b[0]);

    let dsu = new DisjointSetUnion(n);
    let ans = 0, num = 0;

    for(const [cost, i, j] of edges){
        if(dsu.unionSet(i, j)){
            ans += cost;
            num++;

            if(num == n - 1) break;
        }
    }

    return ans;
};