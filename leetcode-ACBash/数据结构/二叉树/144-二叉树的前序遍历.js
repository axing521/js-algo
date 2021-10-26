/***
 * @creater:ACBash
 * @create_time:21-10-26 19:53:19
 * @last_modify:ACBash
 * @modify_time:21-10-26 20:29:19
 * @line_count:36
 **/

/* 经典递归|前序遍历，没什么好说的 */
const preorderTraversal = (root) => {
    let ans = [];

    const preorder = (node) => {
        if(!node) return;

        ans.push(node.val);
        preorder(node.left);
        preorder(node.right);
    };

    preorder(root);

    return ans;
};

/* 用栈迭代模拟递归|撞墙法 */
const preorderTraversal = (root) => {
    if(!root) return [];
    let ans = [], stack = [], node = root;

    while(node || stack.length){
        while(node){
            ans.push(node.val);
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        node = node.right;
    }

    return ans;
};

/* Morris前序遍历？下次看看 */