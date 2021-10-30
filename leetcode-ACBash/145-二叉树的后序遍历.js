/***
 * @creater:ACBash
 * @create_time:21-10-26 20:29:21
 * @last_modify:ACBash
 * @modify_time:21-10-30 17:11:21
 * @line_count:36
 **/

/* 1.经典递归 */
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

/* 2.用栈迭代模拟递归|后序遍历的代码和前序/中序不一样！！ */
const postorderTraversal = (root) => {
    if(!root) return [];
    let ans = [], stack = [root], node = root; //stack是待访问节点栈，node存储已遍历节点。

    while(stack.length){
        const cur = stack[stack.length-1];

        if((!cur.left && !cur.right) || cur.left == node || cur.right == node){
            node = stack.pop(); //node更新为最新的遍历节点
            ans.push(node.val);
        }else{
            if(cur.right) stack.push(cur.right);
            if(cur.left) stack.push(cur.left);  //这里写的顺序也很讲究
        }
    }

    return ans;
};