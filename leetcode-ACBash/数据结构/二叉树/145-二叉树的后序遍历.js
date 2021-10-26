/***
 * @creater:ACBash
 * @create_time:21-10-26 20:29:21
 * @last_modify:ACBash
 * @modify_time:21-10-26 21:29:18
 * @line_count:36
 **/

/* 经典递归 */
const postorderTraversal = (root) => {
    let ans = [];

    const postorder = (node) => {
        if(!node) return;

        postorder(node.left);
        postorder(node.right);
        ans.push(node.val);
    };

    postorder(root);

    return ans;
};

/* 用栈迭代模拟递归|后序遍历的代码和前序/中序不一样！！ */
const postorderTraversal = (root) => {
    if(!root) return [];
    let ans = [], stack = [root], node = root;

    while(stack.length){
        const cur = stack[stack.length-1];

        if((cur.left == null && cur.right == null) || cur.left == node || cur.right == node){
            node = stack.pop();
            ans.push(node.val);    
        }else{
            if(cur.right) stack.push(cur.right);
            if(cur.left) stack.push(cur.left);
        }
    }

    return ans;
};