/***
 * @creater:ACBash
 * @create_time:21-11-1 15:41:36
 * @last_modify:ACBash
 * @modify_time:21-12-14 17:41:35
 * @line_count:32
 **/

/* 和104-二叉树的最大深度有点联系，这个是高度，自下而上 */
/* 好好体会这个递归吧 */
const isBalanced = (root) => {
    const getHeight = (node) => {
        if(!node) return 0;

        let leftHeight = getHeight(node.left);
        let rightHeight = getHeight(node.right);

        if(leftHeight == -1 || rightHeight == -1 || Math.abs(leftHeight - rightHeight) > 1) return -1;
        
        return 1 + Math.max(leftHeight, rightHeight);
    };

    return getHeight(root) == -1 ? false : true;
};

/* 和104-二叉树的最大深度有点联系，这个是高度，自上而下 */
/* 树的高度是根结点的最大深度 */
const maxDepth = (node) => {
    if(!node) return 0;

    return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
};

const isBalanced = (root) => {
    if(!root) return true;
    
    if(Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1) return false;

    return isBalanced(root.left) && isBalanced(root.right);
};