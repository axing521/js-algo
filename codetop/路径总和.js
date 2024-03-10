// 给定一个二叉树的根节点root，以及一个表示目标和的整数targetSum，判断该树中是否存在根节点到叶子节点的路径和为targetSum
// 二叉树路径问题，一般都是backtrack回溯，track记录路径和的栈，backtrack后pop弹出

const func1 = (root, targetSum) => {
    if (!root) return false;

    let ans = false;

    const backtrack = (track, node, sum) => {
        if (!node.left && !node.right && sum === targetSum) return (ans = true);

        if (node.left) {
            track.push(node.left.val);
            sum += node.left.val;
            backtrack(track, node.left, sum);
            track.pop();
            sum -= node.left.val;
        }

        if (node.right) {
            track.push(node.right.val);
            sum += node.right.val;
            backtrack(track, node.right, sum);
            track.pop();
            sum -= node.right.val;
        }
    };

    backtrack([root.val], root, root.val);

    return ans;
};
