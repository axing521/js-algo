/***
 * @creater:ACBash
 * @create_time:21-10-27 17:13:13
 * @last_modify:ACBash
 * @modify_time:21-10-30 15:13:16
 * @line_count:80
 **/

/* 递归中序遍历，这个递归能不能在找到的时候停下呢？ */
const kthSmallest = (root, k) => {
    let stack = [];

    const inorder = (node) => {
        if(!node) return;

        inorder(node.left);
        stack.push(node.val);
        inorder(node.right);
    }

    inorder(root);

    return stack[k-1];
};

/* 模拟栈迭代，能够在找到的时候退出 */
const kthSmallest = (root, k) => {
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

/* Morris中序遍历 */
const kthSmallest = (root, k) => {
    let pred = null, node = root;

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
}

/* 玩明白递归，利用好BST的性质 */
const nodeCount = (node) => {
    if(node == null) return 0;

    const l = nodeCount(node.left);
    const r = nodeCount(node.right);

    return 1 + l + r;
};

const kthSmallest = (root, k) => {
    const c = nodeCount(root.left);

    if(c == k-1) return root.val;
    else if(c < k-1) return kthSmallest(root.right, k-c-1);
    return kthSmallest(root.left, k);
};