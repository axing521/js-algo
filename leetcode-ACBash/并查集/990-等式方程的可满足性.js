/***
 * @creater:ACBash
 * @create_time:22-7-9 10:25:45
 * @last_modify:ACBash
 * @modify_time:22-7-9 10:38:42
 * @line_count:38
 **/

const equationsPossible = (equations) => {
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

    let judge = [];
    
    for(const equation of equations){
        if(equation[1] == "="){
            union(f, equation[0], equation[3]);
        }else{
            judge.push([equation[0], equation[3]]);
        }
    }

    for(const [a, b] of judge){
        let fa = find(f, a), fb = find(f, b);
        if(fa == fb) return false;
    }

    return true;
};