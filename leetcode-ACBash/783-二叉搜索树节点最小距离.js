/***
 * @creater:ACBash
 * @create_time:22-2-15 2:46:32
 * @last_modify:ACBash
 * @modify_time:22-2-20 18:28:17
 * @line_count:38
 **/

/* 此题和LC-530为同一题 */
/* 中序遍历得升序数列，迭代数列找到最小差值 */
const getMinimumDifference = (root) => {
    let sorted = [];

    const inorder = (node) => {
        if(!node) return;

        inorder(node.left);
        sorted.push(node.val);
        inorder(node.right);
    };

    inorder(root);

    let min = Infinity;

    sorted.forEach((val, idx) => {
        if(!idx) return;
        min = Math.min(min, Math.abs(val - sorted[idx - 1]));
    });

    return min;
};

/* 参数扩展，左右边界 */
const getMinimumDifference = (root) => {
    const dfs = (node, low, high) => {
        if(!node) return high - low;

        const left = dfs(node.left, low, node.val);
        const right = dfs(node.right, node.val, high);

        return Math.min(left, right);
    };

    return dfs(root, -Infinity, Infinity);
};