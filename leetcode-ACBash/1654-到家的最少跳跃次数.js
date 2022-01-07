/***
 * @creater:ACBash
 * @create_time:22-1-7 10:42:57
 * @last_modify:ACBash
 * @modify_time:22-1-7 11:53:19
 * @line_count:44
 **/

/* BFS */
const minimumJumps = (forbidden, a, b, x) => {
    forbidden = new Set(forbidden);

    const nodes = [[0, 0, false]];  //[当前位置，步数，上一次是否向左跳过]

    while(nodes.length){
        const [node, level, jumpLeft] = nodes.shift();

        if(forbidden.has(node) || node < 0 || node > 5999) continue;

        if(!jumpLeft) forbidden.add(node);  //?可以不要if判断

        if(node == x) return level;

        if(!jumpLeft) nodes.push([node - b, level + 1, true]);
        nodes.push([node + a, level + 1, false]);
    }

    return -1;
};

/* DFS? */
const minimumJumps = (forbidden, a, b, x) => {
    forbidden = new Set(forbidden);

    let ans = Infinity;

    const dfs = (pos, step, jumpLeft) => {
        if(forbidden.has(pos) || pos < 0 || pos > 6000) return;

        if(jumpLeft) forbidden.add(pos);    //必须要

        if(pos == x) return ans = Math.min(ans, step);
        
        dfs(pos + a, step + 1, true);
        if(jumpLeft) dfs(pos - b, step + 1, false);
        
    };

    dfs(0, 0, true);   

    return ans == Infinity ? -1 : ans;
};