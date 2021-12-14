/***
 * @creater:ACBash
 * @create_time:21-12-13 16:5:22
 * @last_modify:ACBash
 * @modify_time:21-12-14 17:4:21
 * @line_count:16
 **/

/* 底线条件为root为空，判断子树是否有效，sum = 1 / 0 + 左子树 + 右子树 */
const countUnivalSubtrees = (root) => {
    if(!root) return 0;

    const isValid = (node) => {
        if(!node) return true;

        if(node.val != root.val) return false;

        return isValid(node.left) && isValid(node.right);
    };

    sum = isValid(root) ? 1 : 0;

    return sum + countUnivalSubtrees(root.left) + countUnivalSubtrees(root.right);
};