/***
 * @creater:ACBash
 * @create_time:22-2-13 15:57:40
 * @last_modify:ACBash
 * @modify_time:22-2-15 1:28:35
 * @line_count:14
 **/

/* 自底向上，后序遍历 */
const pruneTree = (root) => {
    const dfs = (node) => {
        if(!node) return null;

        node.left = dfs(node.left);
        node.right = dfs(node.right);

        if(node.val || node.left || node.right) return node;
        else return null;
    };

    return dfs(root);
};