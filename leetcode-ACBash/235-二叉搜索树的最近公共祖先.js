/***
 * @creater:ACBash
 * @create_time:21-11-7 17:40:55
 * @last_modify:ACBash
 * @modify_time:21-11-7 18:7:55
 * @line_count:57
 **/

/* LC-236通解1 */
const lowestCommonAncestor = (root, p, q) => {
    let ans;

    const dfs = (root, p, q) => {
        if(!root) return false;

        const lson = dfs(root.left, p, q);
        const rson = dfs(root.right, p, q);

        if((lson && rson) || ((lson || rson) && (root == p || root == q))){
            ans = root;    
        }

        return lson || rson || (root == p || root == q);
    };

    dfs(root, p, q);

    return ans;
};

/* LC-236通解2 */
const lowestCommonAncestor = (root, p, q) => {
    if(!root || root == p || root == q) return root;

    const lson = lowestCommonAncestor(root.left, p, q);
    const rson = lowestCommonAncestor(root.right, p, q);

    if(lson && rson) return root;
    if(lson) return lson;
    if(rson) return rson;

    return null;
};

/* BST特色简写|递归实现 */
const lowestCommonAncestor = (root, p, q) => {
    if(p.val < root.val && q.val < root.val)
    return lowestCommonAncestor(root.left, p, q);

    if(p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q);

    return root;
};

/* BST特色简写|迭代实现 */
const lowestCommonAncestor = (root, p, q) => {
    while(root){
        if(p.val < root.val && q.val < root.val) root = root.left;
        else if(p.val > root.val && q.val > root.val) root = root.right;
        else break;
    }

    return root;
};