/***
 * @creater:ACBash
 * @create_time:21-11-1 15:41:36
 * @last_modify:ACBash
 * @modify_time:21-11-1 17:2:47
 * @line_count:25
 **/

/* 和104-二叉树的最大深度有点联系，这个是高度，自下而上 */
/* 好好体会这个递归吧 */
const isBalanced = (root) => {
    const getHeight = (node) => {
        if(!node) return 0;
        let leftHeight = getHeight(node.left);
        let rightHeight = getHeight(node.right);

        if(leftHeight == -1 || rightHeight == -1 || Math.abs(leftHeight - rightHeight) > 1) return -1;
        else return 1 + Math.max(leftHeight, rightHeight);
    };

    return getHeight(root) === -1 ? false : true;
};

/* 和104-二叉树的最大深度有点联系，这个是高度，自上而下 */
const maxDepth = (root) => {
    if(!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

const isBalanced = (root) => {
    if(!root) return true;
    return Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};