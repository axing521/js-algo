// 给定一个BST的root，一个整数k，返回第k个最小元素
// BST中序遍历是升序数组，三种中序遍历 | 用递归，跟玩数组中第k大的元素套路一样

const func1 = (root, k) => {
    let ans = [];

    const dfs = (node) => {
        if(!node) return;

        dfs(node.left);
        ans.push(node.val);
        dfs(node.right);
    };

    dfs(root);

    return ans[k - 1];
};

const func2 = (root, k) => {
    let stack = [], node = root;

    while(node || stack.length){
        while(node){
            stack.push(node);
            node = node.left;
        }

        node = stack.pop();
        if(--k == 0) return node.val;
        node = node.right;
    }

    return -1;
};

const func3 = (root, k) => {
    let node = root, pred = null;

    while(node){
        pred = node.left;
        
        if(pred){
            while(pred.right && pred.right != node){
                pred = pred.right;
            }

            if(pred.right == node){
                if(--k == 0) return node.val;
                node = node.right;
            }else{
                pred.right = node;
                node = node.left;
            }
        }else{  
            if(--k == 0) return node.val;
            node = node.right;
        }
    }

    return -1;
};

// 查找序号
const nodeCount = (node) => {
    if(!node) return 0;

    const left = nodeCount(node.left);
    const right = nodeCount(node.right);

    return 1 + left + right;
};

const func4 = (root, k) => {
    const index = nodeCount(root.left);

    if(index == k - 1) return root.val;
    else if(index < k - 1) return func4(root.right, k - index - 1);
    else return func4(root.left, k);
};