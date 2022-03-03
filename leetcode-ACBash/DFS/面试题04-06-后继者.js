/***
 * @creater:ACBash
 * @create_time:22-3-3 12:21:51
 * @last_modify:ACBash
 * @modify_time:22-3-3 20:49:2
 * @line_count:66
 **/

/* 两种情况 */
const inorderSuccessor = (root, p) => {
    if(p.right){
        let node = p.right;
        while(node.left) node = node.left;
        return node;
    }

    let node = root, ans = null;

    while(node != p){
        if(p.val < node.val){
            ans = node;
            node = node.left;
        }else{
            node = node.right;
        }
    }

    return ans;
};

/* 先中序遍历结果找到后继点的值，再搜索那个节点 */
const inorderSuccessor = (root, p) => {
    let nextNode = null, flag = false;

    const inorder = (node) => {
        if(!node) return;

        inorder(node.left);
        if(flag){
            nextNode = node;
            flag = false;
        }
        if(node.val == p.val) flag = true;
        inorder(node.right);
    };

    inorder(root);

    return nextNode;
};

/* 栈模拟迭代 */
const inorderSuccessor = (root, p) => {
    let node = root, stack = [], ans = null, flag = false;

    while(node || stack.length){
        while(node){
            stack.push(node);
            node = node.left;
        }

        node = stack.pop();

        if(flag){
            ans = node;
            flag = false;
        }
        if(node.val == p.val) flag = true;

        node = node.right;
    }

    return ans;
};