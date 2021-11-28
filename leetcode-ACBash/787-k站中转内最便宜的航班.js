/***
 * @creater:ACBash
 * @create_time:21-11-28 21:9:21
 * @last_modify:ACBash
 * @modify_time:21-11-28 22:9:31
 * @line_count:42
 **/

/* DP,确实牛逼,二维数组 */
const findCheapestPrice = (n, flights, src, dst, k) => {
    const f = Array.from(new Array(k + 2), () => new Array(n).fill(Infinity));

    f[0][src] = 0;

    for(let t = 1; t <= k + 1; t++){
        for(const flight of flights){
            const j = flight[0], i = flight[1], cost = flight[2];
            f[t][i] = Math.min(f[t][i], f[t - 1][j] + cost);
        }
    }

    let ans = Infinity;

    for(let t = 1; t <= k + 1; t++){
        ans = Math.min(ans, f[t][dst]);
    }

    return ans == Infinity ? -1 : ans;
};

/* 两个一维数组，性能好一点 */
const findCheapestPrice = (n, flights, src, dst, k) => {
    let f = new Array(n).fill(Infinity);
    let ans = Infinity;

    f[src] = 0;

    for(let t = 1; t <= k + 1; t++){
        const g = new Array(n).fill(Infinity);
        for(const [u, v, w] of flights){
            g[v] = Math.min(g[v], f[u] + w);
        }
        f = g;
        ans = Math.min(ans, f[dst]);
    }

    return ans == Infinity ? -1 : ans;
};

console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1));