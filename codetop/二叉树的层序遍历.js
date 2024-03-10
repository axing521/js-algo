// 给定一个二叉树root，返回其节点值的层序遍历
// 递归实现，用dfs，每层带一个层序号

const func1 = (root) => {
    let ans = [];

    const dfs = (node, depth) => {
        if(!node) return;

        if(ans.length < depth + 1) ans.push([]);

        ans[depth].push(node.val);
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    };

    dfs(root, 0);

    return ans;
};

// 迭代实现，用bfs，使用队列，while循环控制层，每层遍历len，遍历过程中有左右子节点添加进queue

const func2 = (root) => {
    if(!root) return [];

    let queue = [root];
    let ans = [];

    while(queue.length){
        const len = queue.length;
        let level = [];

        for(let i = 0; i < len; i++){
            const top = queue.shift();
            level.push(top.val);
            top.left && queue.push(top.left);
            top.right && queue.push(top.right);
        }

        ans.push(level);
    }

    return ans;
};

// 跟上面一样，但是用null来确认层，里面就不需要for循环遍历层

const levelOrder = (root) => {
    if(!root) return [];
    let ans = [], queue = [root,null], levelNodes = [];

    while(queue.length){
        const top = queue.shift();

        if(top){
            levelNodes.push(top.val);
            if(top.left) queue.push(top.left);
            if(top.right) queue.push(top.right);
        }else{
            ans.push(levelNodes);
            levelNodes = [];
            if(queue.length) queue.push(null);
        }
    }

    return ans;
};