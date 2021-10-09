/* 1.递归 */
const inorderTraversal = (root) => {
    let res = [];
    const inorder = (root) => {
        if(!root){
            return;
        }
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
}

/* 2.迭代 */
const inorderTraversal = (root) => {
    let res = [];
    let stk = [];
    while(root || stk.length){
        while(root){
            stk.push(root);
            root = root.left;
        }
        root = stk.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
}

/* 3.Morris中序遍历,找左子树的最右点 */
const inorderTraversal = (root) => {
    let res = [];
    let predecessor = null;
    while(root){
        if(root.left){
            predecessor = root.left;
            while(predecessor.right && predecessor.right!==root){
                predecessor = predecessor.right;
            }
            if(predecessor.right){
                res.push(root.val);
                root = root.right;
                predecessor = null;
            }else{
                predecessor.right = root;
                root = root.left;
            }
        }else{
            res.push(root.val);
            root = root.right;
        }
    }
    return res;
}