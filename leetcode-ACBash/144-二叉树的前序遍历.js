/***
 * @creater:ACBash
 * @create_time:21-10-26 19:53:19
 * @last_modify:ACBash
 * @modify_time:21-10-28 14:18:17
 * @line_count:38
 **/

/* 1.递归 */
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

/* 2.模拟栈迭代 */
const preorderTraversal = (root) => {
    if(!root) return [];
    let ans = [], node = root, stack = [];

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

/* 3.Morris前序遍历？ */