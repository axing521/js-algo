/***
 * @creater:ACBash
 * @create_time:22-1-25 17:59:12
 * @last_modify:ACBash
 * @modify_time:22-1-25 20:50:42
 * @line_count:41
 **/

/* 双递归,dfs */
const findTilt = (root) => {
    let ans = 0;

    const compute = (node) => {
        if(!node) return 0;

        return node.val + compute(node.left) + compute(node.right);
    };

    const dfs = (node) => {
        if(!node) return;

        ans += Math.abs(compute(node.left) - compute(node.right));
        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);

    return ans;
};

/* 可以写成一个递归 */
const findTilt = (root) => {
    let ans = 0;

    const dfs = (node) => {
        if(!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        ans += Math.abs(left - right);
        return node.val + left + right;
    };

    dfs(root);

    return ans;
};