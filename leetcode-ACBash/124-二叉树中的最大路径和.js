/***
 * @creater:ACBash
 * @create_time:21-11-2 18:7:8
 * @last_modify:ACBash
 * @modify_time:21-11-2 21:17:5
 * @line_count:42
 **/

/* DFS|自下而上|其实是属于后序遍历 */
const maxPathSum = (root) => {
    let maxSum = -Infinity;

    const dfs = (root) => {
        if(!root) return 0;

        const left = dfs(root.left);
        const right = dfs(root.right);

        const innerMaxSum = left + root.val + right;
        maxSum = Math.max(maxSum, innerMaxSum);

        const outputMaxSum = root.val + Math.max(0, left, right);

        return outputMaxSum < 0 ? 0 : outputMaxSum;
    }

    dfs(root);

    return maxSum;
};

/* 另一种写法 */
const maxPathSum = (root) => {
    let ans = -Infinity;

    const dfs = (node) => {
        if(!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        ans = Math.max(ans, node.val + left + right, node.val + left, node.val + right, node.val);

        return Math.max(0, node.val, node.val + left, node.val + right);
    }

    dfs(root);

    return ans;
}