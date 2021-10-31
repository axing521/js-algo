/***
 * @creater:ACBash
 * @create_time:21-10-31 15:33:20
 * @last_modify:ACBash
 * @modify_time:21-10-31 18:2:49
 * @line_count:32
 **/

/* DFS|递归|雀氏牛逼|自下而上 */
const lowestCommonAncestor = (root, p, q) => {
    let ans;

    const dfs = (root, p, q) => {
        if(!root) return false;

        const lson = dfs(root.left, p, q);
        const rson = dfs(root.right, p, q);

        if((lson && rson) || ((root.val == p.val || root.val == q.val) && (lson || rson))){
            ans = root;
        }
        return lson || rson || (root.val == p.val || root.val == q.val);
    }

    dfs(root, p, q);

    return ans;
};

/* 递归|自顶向下 */
const lowestCommonAncestor = (root, p, q) => {
    if(!root || root == p || root == q) return root;    //基线条件

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if(left && right) return root;
    if(left) return left;
    if(right) return right;
};