/***
 * @creater:ACBash
 * @create_time:22-2-20 21:0:15
 * @last_modify:ACBash
 * @modify_time:22-2-22 13:41:59
 * @line_count:18
 **/

/* 此题与LC-1123重复 */
/* 确实牛，参数扩展 + 返回元组 */
const subtreeWithAllDeepest = (root) => {
    const dfs = (node, depth) => {
        if(!node) return [node, depth];
        
        const [left, leftDepth] = dfs(node.left, depth + 1);
        const [right, rightDepth] = dfs(node.right, depth + 1);

        if(leftDepth == rightDepth) return [node, leftDepth];
        if(leftDepth > rightDepth) return [left, leftDepth];
        if(leftDepth < rightDepth) return [right, rightDepth];
    };

    const tuple = dfs(root, -1);

    return tuple[0];
};