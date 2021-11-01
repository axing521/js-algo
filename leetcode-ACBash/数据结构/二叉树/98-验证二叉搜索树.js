/***
 * @creater:ACBash
 * @create_time:21-11-1 14:31:17
 * @last_modify:ACBash
 * @modify_time:21-11-1 15:26:52
 * @line_count:110
 **/

/* 1.中序遍历-递归实现 */
const isValidBST = (root) => {
    let visited = [];

    const inorder = (node) => {
        if(!node) return;

        inorder(node.left);
        visited.push(node.val);
        inorder(node.right);
    };

    inorder(root);

    for(let i=1; i<visited.length; i++){
        if(visited[i] <= visited[i-1]) return false;
    }

    return true;
};

/* 2.中序遍历-模拟栈迭代实现，可以在发现不满足的时候跳出来 */
const isValidBST = (root) => {
    let stack = [], node = root, max = -Infinity;

    while(node || stack.length){
        while(node){
            stack.push(node);
            node = node.left;
        }

        node = stack.pop();
        /* -迭代可以中途退出- */
        if(max < node.val) max = node.val;
        else return false;
        /* -迭代可以中途退出- */
        node = node.right;
    }

    return true;
};

/* 3.中序遍历-Morris实现 */
const isValidBST = (root) => {
    let pred = null, node = root, max = -Infinity;

    while(node){
        pred = node.left;

        if(pred){
            while(pred.right && pred.right != node){
                pred = pred.right;
            }

            if(pred.right == node){
                /* -迭代可以中途退出- */
                if(max < node.val) max = node.val;
                else return false;
                /* -迭代可以中途退出- */
                node = node.right;
            }else{
                pred.right = node;
                node = node.left;
            }

        }else{
            /* -迭代可以中途退出- */
            if(max < node.val) max = node.val;
            else return false;
            /* -迭代可以中途退出- */
            node = node.right;
        }
    }

    return true;
};

/* 4.玩明白递归|BST定义本质|雀氏牛逼 */
const isValidBST = (root, min = -Infinity, max = Infinity) => {
    if(!root) return true;

    if(root.val <= min) return false;
    if(root.val >= max) return false;

    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};

/* 5.中序遍历-双色标记法 */
const isValidBST = (root) => {
    const [WHITE, GRAY] = [0, 1];
    let stack = [[root, WHITE]], max = -Infinity;

    while(stack.length){
        const [node, color] = stack.pop();   //这里其实可以解构赋值，看着更清爽
        if(!node) continue;

        if(color == WHITE){
            stack.push([node.right, WHITE]);
            stack.push([node, GRAY]);
            stack.push([node.left, WHITE]);
        }else{
            /* -迭代可以中途退出- */
            if(max < node.val) max = node.val;
            else return false;
            /* -迭代可以中途退出- */
        }
    }

    return true;
};