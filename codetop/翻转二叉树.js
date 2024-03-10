// 给定一个二叉树的根节点root，翻转二叉树返回根节点
// dfs递归，自底向上，left，right左右子树反着给root

const func1 = (root) => {
    if(!root) return null;

    const left = func1(root.left);
    const right = func2(root.right);

    root.left = right;
    root.right = left;

    return root;
};

// 迭代，队列，bfs，自顶向下

const func2 = (root) => {
    if(!root) return null;

    let queue = [root];

    while(queue.length){
        const top = queue.shift();

        [top.left, top.right] = [top.right, top.left];

        top.left && queue.push(top.left);
        top.right && queue.push(top.right);
    }

    return root;
};