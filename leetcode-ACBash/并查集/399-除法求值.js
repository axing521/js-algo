/***
 * @creater:ACBash
 * @create_time:22-7-1 13:44:2
 * @last_modify:ACBash
 * @modify_time:22-7-2 10:50:4
 * @line_count:127
 **/

/* 并查集 */
const calcEquation = (equations, values, queries) => {
    let varCount = 0;
    let vars = new Map();
    
    for(const [a, b] of equations){
        if(!vars.has(a)) vars.set(a, varCount++);
        if(!vars.has(b)) vars.set(b, varCount++);
    }

    let f = Array.from({length: varCount}, (val, index) => index);
    let w = new Array(varCount).fill(1.0);
    
    const find = (f, w, x) => {
        if (f[x] != x) {
            const father = find(f, w, f[x]);
            w[x] = w[x] * w[f[x]];
            f[x] = father;
        }
        return f[x];
    };

    const union = (f, w, x, y, val) => {
        const fx = find(f, w, x);
        const fy = find(f, w, y);
        f[fx] = fy;
        w[fx] = val * w[y] / w[x];
    };

    let valueIndex = 0;
    for(const [a, b] of equations){
        const va = vars.get(a), vb = vars.get(b);
        union(f, w, va, vb, values[valueIndex++]);
    }

    const queriesLen = queries.length;
    let ans = new Array(queriesLen).fill(-1.0);
    
    for(let i = 0; i < queriesLen; i++){
        const [na, nb] = queries[i];
        
        if(vars.has(na) && vars.has(nb)){
            const va = vars.get(na), vb = vars.get(nb);
            const fa = find(f, w, va), fb = find(f, w, vb);
            if(fa == fb) ans[i] = w[va] / w[vb];
        }
    }

    return ans;
};

/* 建图，dfs */
//边权值是两个点的商，找两点间路径的权值积
const calcEquation = (equations, values, queries) => {
    let map = new Map(), ans = [];
    let visited = new Map();
};
var calcEquation = function(equations, values, queries) {
    let map = new Map(), res = [];
    let visit = new Map();  // visit 数组标记在搜索过程中是否访问过

    const dfs = (src, dst) => {
        // 若可达，且找到了目的节点，返回 1.0 表示成功到达
        if (src === dst) {
            return 1.0;
        }

        let adjs = map.get(src);

        // 遍历 src 的所有边，若未访问过，则对其调用 dfs 获取路径积
        for (let i = 0; i < adjs.length; ++i) {
            let next = adjs[i];
            if (!visit.get(next[0])) {
                visit.set(next[0], true);

                let ret = dfs(next[0], dst);

                visit.set(next[0], false);
                // 若可达 dst，则返回当前边权与后续的边权积 ret 的乘积
                if (ret !== -1.0) {
                    return next[1] * ret;
                }
            }
        }

        // 否则，不可达，返回 -1.0
        return -1.0;
    };

    // 创建邻接表
    for (let i = 0; i < equations.length; ++i) {
        let e = equations[i], v = values[i];

        if (!map.has(e[0])) {
            map.set(e[0], []);
            visit.set(e[0], false);
        }
        if (!map.has(e[1])) {
            map.set(e[1], []);
            visit.set(e[1], false);
        }

        let adj1 = map.get(e[0]);
        let adj2 = map.get(e[1]);
        adj1.push([e[1], v]);
        adj2.push([e[0], 1 / v]);
    }

    for (let q of queries) {
        let n0 = q[0], n1 = q[1];
        if (map.has(n0) && map.has(n1)) {
            visit.set(n0, true);
            res.push(dfs(n0, n1));
            visit.set(n0, false);
        } else {
            res.push(-1.0);
        }
    }

    return res;    
};

/* BFS? */

/* Floyd */

/* LC官方题解有 */