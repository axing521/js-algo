// 给定一个二叉树root，检查是否轴对称
// 递归，dfs，左右子树参数

const func1 = (root) => {
    if(!root) return true;

    const dfs = (left, right) => {
        if(!left && !right) return true;

        if(left && right && left.val == right.val && dfs(left.left, right.right) && dfs(left.right, right.left)) return true;

        return false;
    };

    return dfs(root.left, root.right);
};

// 迭代，BFS，注意queue的push

const func2 = (root) => {
    if(!root) return true;

    let queue = [root.left, root.right];

    while(queue.length){
        const len = queue.length;

        for(let i = 0; i < len; i++){
            const left = queue.pop();
            const right = queue.pop();

            if((left && !right) || (!left && right)) return false;

            if(left && right){
                if(left.val != right.val) return false;
                queue.push(left.left, right.right);
                queue.push(left.right, right.left);
            }
        }
    }

    return true;
};