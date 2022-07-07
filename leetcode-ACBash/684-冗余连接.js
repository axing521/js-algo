/***
 * @creater:ACBash
 * @create_time:22-7-7 21:17:27
 * @last_modify:ACBash
 * @modify_time:22-7-7 21:56:26
 * @line_count:24
 **/

/* 并查集 */
const findRedundantConnection = (edges) => {
    const n = edges.length;
    let f = Array.from({length: n}, (val, index) => index);
    
    const find = (f, x) => {
        if(f[x] != x){
            f[x] = find(f, f[x]);
        }
        return f[x];
    };

    const union = (f, x, y) => {
        const fx = find(f, x), fy = find(f, y);
        if(fx == fy) return false;
        f[fx] = fy;
        return true;
    };

    for(const [a, b] of edges){
        const va = a - 1, vb = b - 1;
        if(!union(f, va, vb)) return [a, b];
    }
};