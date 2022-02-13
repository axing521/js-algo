/***
 * @creater:ACBash
 * @create_time:22-2-13 15:25:38
 * @last_modify:ACBash
 * @modify_time:22-2-13 15:57:42
 * @line_count:43
 **/

/* 回溯 */
const sumRootToLeaf = (root) => {
    let track = root.val, ans = 0;

    const backtrack = (node) => {
        if(!node.left && !node.right){
            ans += track;
            return;
        }

        if(node.left){
            track = (track << 1) + node.left.val;
            backtrack(node.left);
            track = track >> 1;
        }

        if(node.right){
            track = (track << 1) + node.right.val;
            backtrack(node.right);
            track = track >> 1;
        }
    };

    backtrack(root);

    return ans;
};

/* 参数扩展 + 前序遍历 */
const sumRootToLeaf = (root) => {
    let ans = 0;

    const dfs = (node, num) => {
        num = (num << 1) + node.val;
        if(!node.left && !node.right) return ans += num;
        node.left && dfs(node.left, num);
        node.right && dfs(node.right, num);
    };

    dfs(root, 0);

    return ans;
};