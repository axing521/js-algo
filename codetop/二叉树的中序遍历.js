// 给定一个二叉树root，返回它的中序遍历
// 递归，dfs，中序

const func1 = (root) => {
    let node = root, ans = [];

    const dfs = (node) => {
        if(!node) return;

        dfs(node.left);
        ans.push(node.val);
        dfs(node.right);
    }

    dfs(node);

    return ans;
};

// 迭代，用一个显式的stack

const func2 = (root) => {
    let stack = [], ans = [], node = root;

    while(node || stack.length){
        while(node){
            stack.push(node);
            node = node.left;
        }
        
        node = stack.pop();
        ans.push(node.val);
        node = node.right;
    }

    return ans;
}

/* 3.Morris中序遍历，属于迭代，优点是能够O(1)空间 */
/* 核心：找左子树的最右节点|前溯点 */
const inorderTraversal = (root) => {
    let ans = [], node = root, pred = null;

    while(node){
        pred = node.left;
        if(pred){
            while(pred.right && pred.right != node){
                pred = pred.right;
            }

            if(pred.right == node){
                ans.push(node.val);
                node = node.right;  //报告长官，左边的已经探索完了，请您往右边走吧！
            }else{
                pred.right = node;
                node = node.left;
            }

        }else{
            ans.push(node.val);
            node = node.right;
        }
    }

    return ans;
};