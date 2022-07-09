/***
 * @creater:ACBash
 * @create_time:22-7-7 22:0:38
 * @last_modify:ACBash
 * @modify_time:22-7-8 18:9:13
 * @line_count:33
 **/

const findCircleNum = (isConnected) => {
    const n = isConnected.length;
    let f = Array.from({length: n}, (val, index) => index);
    let rank = new Array(n).fill(1);

    const find = (f, x) => {
        if(f[x] != x){
            f[x] = find(f, f[x]);
        }
        return f[x];
    };

    const union = (f, x, y) => {
        let fx = find(f, x), fy = find(f, y);
        if(fx == fy) return false;
        if(rank[fx] > rank[fy]) [fx, fy] = [fy, fx];
        rank[fy] += rank[fx];
        f[fx] = fy;
        return true;
    };

    let ans = n;

    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            if(isConnected[i][j] && union(f, i, j)){
                ans--;
            }
        }
    }

    return ans;
};