/***
 * @creater:ACBash
 * @create_time:22-2-20 18:27:57
 * @last_modify:ACBash
 * @modify_time:22-2-20 21:0:17
 * @line_count:43
 **/

 const maxAncestorDiff = (root) => {
    const dfs = (node, low, high) => {
        if(!node) return high - low;

        const left = dfs(node.left, Math.min(low, node.val), Math.max(high, node.val));
        const right = dfs(node.right, Math.min(low, node.val), Math.max(high, node.val));

        return Math.max(left, right);
    };

    return dfs(root, Infinity, -Infinity);
};

/* 双dfs，200ms */
const maxAncestorDiff = (root) => {
    let ans = -Infinity;

    const backtrack = (node, rootVal) => {
        if(!node.left && !node.right) return;

        if(node.left){
            ans = Math.max(ans, Math.abs(rootVal - node.left.val));
            backtrack(node.left, rootVal);
        }

        if(node.right){
            ans = Math.max(ans, Math.abs(rootVal - node.right.val));
            backtrack(node.right, rootVal);
        }
    };

    const dfs = (node) => {
        if(!node) return;

        backtrack(node, node.val);
        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);

    return ans;
};