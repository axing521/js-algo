/***
 * @creater:ACBash
 * @create_time:21-10-25 15:16:59
 * @last_modify:ACBash
 * @modify_time:21-10-28 14:49:35
 * @line_count:63
 **/

/* 1.递归 */
const inorderTraversal = (root) => {
    let ans = [];

    const inorder = (node) => {
        if(!node) return;
        
        inorder(node.left);
        ans.push(node.val);
        inorder(node.right);
    };

    inorder(root);

    return ans;
};

/* 2.模拟栈迭代 */
const inorderTraversal = (root) => {
    let ans = [], stack = [], node= root;

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
};

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