/***
 * @creater:ACBash
 * @create_time:22-3-1 15:15:8
 * @last_modify:ACBash
 * @modify_time:22-3-1 15:28:32
 * @line_count:18
 **/

 const diameterOfBinaryTree = (root) => {
    let ans = 0;

    const dfs = (node) => {
        if(!node) return -1;

        const left = 1 + dfs(node.left);
        const right = 1 + dfs(node.right);

        ans = Math.max(ans, left + right);

        return Math.max(left, right);
    };

    dfs(root);

    return ans;
};