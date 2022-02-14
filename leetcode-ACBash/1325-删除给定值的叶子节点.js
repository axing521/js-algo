/***
 * @creater:ACBash
 * @create_time:22-2-15 1:28:33
 * @last_modify:ACBash
 * @modify_time:22-2-15 1:42:24
 * @line_count:14
 **/

/* 本质和LC-814一样，自底向上，后序遍历 */
const removeLeafNodes = (root, target) => {
    const dfs = (node) => {
        if(!node) return null;

        node.left = dfs(node.left);
        node.right = dfs(node.right);

        if(node.val != target || node.left || node.right) return node;
        else return null;
    };

    return dfs(root);
};