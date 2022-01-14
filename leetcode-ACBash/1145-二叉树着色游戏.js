/***
 * @creater:ACBash
 * @create_time:22-1-13 21:39:3
 * @last_modify:ACBash
 * @modify_time:22-1-14 15:24:12
 * @line_count:52
 **/

/* 一次遍历，dfs，递然后归 */
const btreeGameWinningMove = (root, n, x) => {
    let ans = false, mid = n >> 1;

    const dfs = (root) => {
        if(!root) return 0;
        const left = dfs(root.left);
        const right = dfs(root.right);

        if(root.val == x){
            if(left > mid || right > mid || left + right + 1 <= mid){
                ans = true;
                return;
            }
        }

        return left + right + 1;
    };

    dfs(root);

    return ans;
};

/* 两次遍历,第一次先找到target，第二次数出target左右子树节点个数 */
const btreeGameWinningMove = (root, n, x) => {
    let target = null;

    const preorder = (node) => {
        if(!node) return;
        if(node.val == x) target = node;
        preorder(node.left);
        preorder(node.right);
    };

    preorder(root);

    const count = (node) => {
        if(!node) return 0;
        return count(node.left) + count(node.right) + 1;
    }

    let leftCount = count(target.left);
    let rightCount = count(target.right);
    let others = n - leftCount - rightCount - 1;

    if(leftCount > rightCount + others) return true;
    if(rightCount > leftCount + others) return true;
    if(others > leftCount + rightCount) return true;

    return false;
};