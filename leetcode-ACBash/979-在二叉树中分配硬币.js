/***
 * @creater:ACBash
 * @create_time:21-11-19 18:59:4
 * @last_modify:ACBash
 * @modify_time:21-11-19 20:51:50
 * @line_count:18
 **/

 const distributeCoins = (root) => {
    let ans = 0;
    
    const dfs = (node) => {
        if(!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);
        
        ans += Math.abs(left) + Math.abs(right);    //需要调整的，多了或者少了

        return node.val + left + right - 1; //老爹，我这儿需要调整的节点数是这么多
    };

    dfs(root);

    return ans;
};