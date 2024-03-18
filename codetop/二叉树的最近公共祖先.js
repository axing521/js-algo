// 给定一个二叉树，找到树中指定两个节点的最近公共祖先

// dfs递归，自顶向下，left，right表示p，q是否在子树中，并返回p||q||null
const func1 = (root, p, q) => {
    if(!root || root == p || root == q) return root;

    const left = func1(root.left, p, q);
    const right = func1(root.right, p, q);

    if(left && right) return root;
    if(left) return left;
    if(right) return right;
};

const func2 = (root, p, q) => {
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