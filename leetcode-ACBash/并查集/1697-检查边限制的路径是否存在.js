/***
 * @creater:ACBash
 * @create_time:22-7-10 0:11:8
 * @last_modify:ACBash
 * @modify_time:22-7-10 0:29:6
 * @line_count:41
 **/

const distanceLimitedPathsExist = (n, edgeList, queries) => {
    edgeList.sort((a, b) => a[2] - b[2]);
    queries = queries.map((query, index) => [...query, index]).sort((a, b) => a[2] - b[2]);
    
    let f = Array.from({length: n}, (val, index) => index);
    let rank = new Array(n).fill(1);
    
    const find = (f, x) => {
        if(f[x] != x){
            f[x] = find(f, f[x]);
        }
        return f[x];
    };  
    
    const union = (f, x, y) => {
        let fx= find(f, x), fy = find(f, y);
        if(fx == fy) return false;
        if(rank[fx] > rank[fy]) [fx, fy] = [fy, fx];
        rank[fy] += rank[fx];
        f[fx] = fy;
        return true;
    };

    const len = edgeList.length;
    let ans = new Array(queries.length).fill(false), i = 0;

    for(const [p, q, limit, index] of queries){
        while(i < len && edgeList[i][2] < limit){
            let u = edgeList[i][0];
            let v = edgeList[i][1];
            union(f, u, v);
            i++;
        }

        if(find(f, p) == find(f, q)){
            ans[index] = true;
        }
    }

    return ans;
};