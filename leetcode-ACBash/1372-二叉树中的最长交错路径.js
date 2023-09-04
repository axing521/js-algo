/***
 * @creater:ACBash
 * @create_time:22-1-16 22:56:31
 * @last_modify:ACBash
 * @modify_time:22-1-16 23:53:19
 * @line_count:14
 **/

/* 关键是任意节点（除开根节点）只有一个父节点，从他是往左/右走来的？ */
const longestZigZag = (root) => {
    let ans = 0;

    const dfs = (node, left, right) => {
        ans = Math.max(ans, left, right);
        node.left && dfs(node.left, right + 1, 0);
        node.right && dfs(node.right, 0, left + 1);
    };

    dfs(root, 0, 0);    //后两个参数表示来的方向的路径已经存储的长度值

    return ans;
};