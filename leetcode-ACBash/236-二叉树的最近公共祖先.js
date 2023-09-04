/***
 * @creater:ACBash
 * @create_time:21-10-31 15:33:20
 * @last_modify:ACBash
 * @modify_time:22-11-25 11:31:14
 * @line_count:64
 **/

/* DFS|递归|雀氏牛逼|自下而上，同法一，但返回bool，当左右子树为真或者根为真且存在子树真情况下，确定ans */
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

/* 递归|自顶向下，left，right表示p，q是否在子树中，并返回p||q||null */
const lowestCommonAncestor = (root, p, q) => {
    if(!root || root == p || root == q) return root;    //基线条件

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if(left && right) return root;
    if(left) return left;
    if(right) return right;
};

const lowestCommonAncestor = (root, p, q) => {
    if(!root || root == p || root == q) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if(left && right) return root;
    if(left) return left;
    if(right) return right;
};

const lowestCommonAncestor = (root, p, q) => {
    let ans;

    const dfs = (root, p, q) => {
        if(!root) return false;

        const left = dfs(root.left, p, q);
        const right = dfs(root.right, p, q);

        if((left && right) || ((root == p || root == q) && (left || right))){
            ans = root;
        }

        return (left || right || root == p || root == q);
    };

    dfs(root, p, q);

    return ans;
};