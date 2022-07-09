/***
 * @creater:ACBash
 * @create_time:22-7-9 17:11:17
 * @last_modify:ACBash
 * @modify_time:22-7-9 17:11:33
 * @line_count:46
 **/

const smallestStringWithSwaps = (s, pairs) => {
    const n = s.length;
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

    for(const [a, b] of pairs){
        union(f, a, b);
    }

    let indexSet = {};
    
    for(let i = 0; i < n; i++){
        let root = find(f, i);
        if(indexSet[root] == undefined) indexSet[root] = [];
        indexSet[root].push(i);
    }

    let arr = s.split("");

    for(const root in indexSet){
        const indexs = indexSet[root];
        let minStr = indexs.map(val => arr[val]).sort();
        for(let i = 0; i < indexs.length; i++){
            const index = indexs[i];
            arr[index] = minStr[i];
        }
    }

    return arr.join("");
};