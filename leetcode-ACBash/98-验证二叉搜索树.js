/***
 * @creater:ACBash
 * @create_time:21-11-1 14:31:17
 * @last_modify:ACBash
 * @modify_time:21-12-14 14:3:30
 * @line_count:108
 **/

/* 1.中序遍历-递归实现 */
const isValidBST = (root) => {
    let inorder = [];

    const inorderTraversal = (node) => {
        if(!node) return;

        inorderTraversal(node.left);
        inorder.push(node.val);
        inorderTraversal(node.right);
    };

    inorderTraversal(root);

    for(let i = 1; i < inorder.length; i++){
        if(inorder[i] <= inorder[i - 1]) return false;
    }

    return true;
};

/* 2.中序遍历-模拟栈迭代实现，可以在发现不满足的时候跳出来 */
const isValidBST = (root) => {
    let node = root, stack = [], max = -Infinity;

    while(node || stack.length){
        while(node){
            stack.push(node);
            node = node.left;
        }

        node = stack.pop();
        /* -迭代可以中途退出- */
        if(max >= node.val) return false;
        max = node.val;
        /* -迭代可以中途退出- */
        node = node.right;
    }

    return true;
};

/* 3.中序遍历-Morris实现 */
const isValidBST = (root) => {
    let node = root, pred = null, max = -Infinity;

    while(node){
        pred = node.left;

        if(pred){
            while(pred.right && pred.right != node){
                pred = pred.right;
            }

            if(pred.right){
                /* -迭代可以中途退出- */
                if(max >= node.val) return false;
                max = node.val;
                /* -迭代可以中途退出- */
                node = node.right;
            }else{
                pred.right = node;
                node = node.left;
            }
        }else{
            /* -迭代可以中途退出- */
            if(max >= node.val) return false;
            max = node.val;
            /* -迭代可以中途退出- */
            node = node.right;
        }
    }

    return true;
};

/* 4.玩明白递归|BST定义本质|雀氏牛逼 */
const isValidBST = (root, min = -Infinity, max = Infinity) => {
    if(!root) return true;

    if(root.val <= min || root.val >= max) return false;
    
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};

/* 5.中序遍历-双色标记法 */
const isValidBST = (root) => {
    const [WHITE, GRAY] = [0, 1];
    let stack = [[WHITE, root]], max = -Infinity;

    while(stack.length){
        const [color, node] = stack.pop();

        if(!node) continue;
        if(color == WHITE){
            stack.push([WHITE, node.right]);
            stack.push([GRAY, node]);
            stack.push([WHITE, node.left]);
        }else{
            /* -迭代可以中途退出- */
            if(max >= node.val) return false;
            max = node.val;  
            /* -迭代可以中途退出- */
        }
    }

    return true;
};