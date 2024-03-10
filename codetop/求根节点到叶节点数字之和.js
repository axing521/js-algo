// 给定一个二叉树根节点root，每个节点存放一个0-9的数字，计算所有路径的生成数字和
// 二叉树路径问题，回溯，track记录路径的生成数字

const func1 = root => {
    if (!root.left && !root.right) return root.val;

    let track = root.val,
        sum = 0;

    const backtrack = node => {
        if (!node.left && !node.right) {
            sum += track;
            return;
        }

        if (node.left) {
            track = track * 10 + node.left.val;
            backtrack(node.left);
            track = (track / 10) | 0;
        }

        if (node.right) {
            track = track * 10 + node.right.val;
            backtrack(node.right);
            track = (track / 10) | 0;
        }
    };

    backtrack(root);

    return sum;
};
