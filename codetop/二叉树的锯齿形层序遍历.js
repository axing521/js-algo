// 给定一个二叉树根节点root，返回其节点值的锯齿形层序遍历
// 用一个dir布尔值表示方向，如果反向最后添加levelNodes要reverse，其他就是正常层序遍历

const func1 = root => {
    if (!root) return [];

    let queue = [root];
    let dir = true;
    let ans = [];

    while (queue.length) {
        const len = queue.length;
        let levelNodes = [];

        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            levelNodes.push(node.val);

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }

        if (dir != true) levelNodes.reverse();
        dir = !dir;

        ans.push(levelNodes);
    }

    return ans;
};
