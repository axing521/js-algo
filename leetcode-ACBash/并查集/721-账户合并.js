/***
 * @creater:ACBash
 * @create_time:22-7-9 10:16:21
 * @last_modify:ACBash
 * @modify_time:22-7-9 10:16:21
 * @line_count:47
 **/

const accountsMerge = (accounts) => {
    let f = {};
    let rank = {};

    const find = (f, x) => {
        if(f[x] == undefined) return x;
        f[x] = find(f, f[x]);
        return f[x];
    };

    const union = (f, x, y) => {
        let fx = find(f, x), fy = find(f, y);
        if(fx == fy) return false;
        if(rank[fx] == undefined) rank[fx] = 1;
        if(rank[fy] == undefined) rank[fy] = 1;
        if(rank[fx] > rank[fy]) [fx, fy] = [fy, fx];
        rank[fy] += rank[fx];
        f[fx] = fy;
        return true;
    };

    let map = {};   //邮箱 => 名称
    
    for(const account of accounts){
        const len = account.length;
        for(let i = 1; i < len; i++){
            map[account[i]] = account[0];
            if(i < len - 1) union(f, account[i], account[i + 1]);
        }
    }

    let set = {};   //root => [邮箱]
    
    for(const mail in map){
        const root = find(f, mail);
        if(set[root] == undefined) set[root] = [];
        set[root].push(mail);
    }

    let ans = [];

    for(const root in set){
        ans.push([map[root], ...set[root].sort()]);
    }

    return ans;
};