/***
 * @creater:ACBash
 * @create_time:22-2-22 13:41:41
 * @last_modify:ACBash
 * @modify_time:22-2-22 15:10:7
 * @line_count:24
 **/

/* 自底向上，叶节点之间距离，元组，笛卡尔积，注意边界条件 */
const countPairs = (root, distance) => {
    let ans = 0;

    const dfs = (node) => {
        if(!node) return [];
        if(!node.left && !node.right) return [0];
        
        const leftTuple = dfs(node.left).map(val => val + 1);
        const rightTuple = dfs(node.right).map(val => val + 1);

        for(const left of leftTuple){
            for(const right of rightTuple){
                if(left + right <= distance) ans++;
            }
        }

        return leftTuple.concat(rightTuple);
    };

    dfs(root);

    return ans;
};