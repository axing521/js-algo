/***
 * @creater:ACBash
 * @create_time:21-10-30 15:13:13
 * @last_modify:ACBash
 * @modify_time:21-10-30 16:34:56
 * @line_count:88
 **/

/* 递归 */
const isValidBST = (root) => {
    let stack = [];

    const inorder = (node) => {
        if(!node) return;

        inorder(node.left);
        stack.push(node.val);
        inorder(node.right);
    };
    
    inorder(root);

    for(let i=1; i<stack.length; i++){
        if(stack[i] <= stack[i-1]) return false;
    }

    return true;
};

/* 模拟栈迭代，可以在发现不满足的时候跳出来 */
const isValidBST = (root) => {
    let stack = [], node = root, max = -Infinity;

    while(node || stack.length){
        while(node){
            stack.push(node);
            node = node.left;
        }

        node = stack.pop();
        if(max < node.val){
            max = node.val;
        }else{
            return false;
        }
        node = node.right;
    }

    return true;
};

/* Morris中序遍历 */
const isValidBST = (root) => {
    let pred = null, node = root, max = -Infinity;

    while(node){
        pred = node.left;
        if(pred){
            while(pred.right && pred.right != node){
                pred = pred.right;
            }

            if(pred.right == node){
                if(max < node.val){
                    max = node.val;
                }else{
                    return false;
                }
                node = node.right;
            }else{
                pred.right = node;
                node = node.left;
            }

        }else{
            if(max < node.val){
                max = node.val;
            }else{
                return false;
            }
            node = node.right;
        }
    }

    return true;
};

/* 玩明白递归|BST定义本质|雀氏牛逼 */
const isValidBST = (root, min = -Infinity, max = Infinity) => {
    if(!root) return true;

    if(root.val <= min) return false;
    if(root.val >= max) return false;

    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);   //这个“&&”太妙了
};