/***
 * @creater:ACBash
 * @create_time:21-10-25 15:16:59
 * @last_modify:ACBash
 * @modify_time:21-10-25 15:51:30
 * @line_count:58
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

/* 2.迭代 */
const inorderTraversal = (root) => {
    let ans = [], stack = [], node = root;

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

/* 3.Morris中序遍历,找左子树的最右点 */
const inorderTraversal = (root) => {
    let ans = [], pred = null, node = root;

    while(node){
        if(node.left){
            pred = node.left;
            while(pred.right && pred.right != node){
                pred = pred.right;
            }
            if(pred.right == node){
                ans.push(node.val);
                node = node.right;
            }else{
                pred.right = node;
                node = node.left;
            }
        }else{
            ans.push(node.val);
            node = node.right;  //回家or遍历右边子树
        }
    }

    return ans;
};