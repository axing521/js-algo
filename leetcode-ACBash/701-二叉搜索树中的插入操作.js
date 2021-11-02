/***
 * @creater:ACBash
 * @create_time:21-11-2 15:35:18
 * @last_modify:ACBash
 * @modify_time:21-11-2 18:7:7
 * @line_count:204
 **/

/* BST中序遍历是有序数组，那么找到合适的位置插入即可*/
/* 重点是注意一些边界条件：
 * 1.空树
 * 2.递归实现中只能插一次，怎么实现？
 * 3.递归实现中如果没插到，怎么处理？
 */
/* 递归实现 */
const insertIntoBST = (root, val) => {
    let insertNode = new TreeNode(val), count = 0;
    if(!root) return insertNode;

    const inorder = (node) => {
        if(!node) return;

        inorder(node.left);
        if(node.val > insertNode.val && count == 0){
            insertNode.left = node.left;
            node.left = insertNode;
            count++;
        }
        inorder(node.right);
    }

    inorder(root);
    if(count == 0){
        let rightest = root;
        while(rightest.right){
            rightest = rightest.right;
        }

        rightest.right = insertNode;
    }

    return root;
};

/* 模拟栈迭代实现 */
const insertIntoBST = (root, val) => {
    let insertNode = new TreeNode(val);
    if(!root) return insertNode;

    let stack = [], node = root, count = 0;

    while(node || stack.length){
        while(node){
            stack.push(node);
            node = node.left;
        }

        node = stack.pop();
        if(node.val > insertNode.val){
            insertNode.left = node.left;
            node.left = insertNode;
            count++;
            break;
        }
        node = node.right;
    }

    if(count == 0){
        let rightest = root;
        while(rightest.right){
            rightest = rightest.right;
        }

        rightest.right = insertNode;
    }

    return root;
};

/* Morris实现，这个实现有bug，大概是插入新节点后，回溯点的right指针指不回去了，下次看看 */
const insertIntoBST = (root, val) => {
    let insertNode = new TreeNode(val);
    if(!root) return insertNode;

    let pred = null, node = root, count = 0;

    while(node){
        pred = node.left;

        if(pred){
            while(pred.right && pred.right != node){
                pred = pred.right;
            }

            if(pred.right == node){
                if(node.val > insertNode.val && count == 0){
                    insertNode.left = node.left;
                    node.left = insertNode;
                    count++;
                }
                node = node.right;
            }else{
                pred.right = node;
                node = node.left;
            }

        }else{
            if(node.val > insertNode.val && count == 0){
                insertNode.left = node.left;
                node.left = insertNode;
                count++;
            }
            node = node.right;
        }
    }

    if(count == 0){
        let rightest = root;
        while(rightest.right){
            rightest = rightest.right;
        }

        rightest.right = insertNode;
    }

    return root;
};

/* 双色标记法实现 */
const insertIntoBST = (root, val) => {
    let insertNode = new TreeNode(val);
    if(!root) return insertNode;

    const [WHITE, GRAY] = [0, 1];
    let stack = [[root, WHITE]], count = 0;

    while(stack.length){
        const [node, color] = stack.pop();
        if(!node) continue;
        
        if(color == WHITE){
            stack.push([node.right, WHITE]);
            stack.push([node, GRAY]);
            stack.push([node.left, WHITE]);
        }else{
            if(node.val > insertNode.val){
                insertNode.left = node.left;
                node.left = insertNode;
                count++;
                break;
            }
        }
    }

    if(count == 0){
        let rightest = root;
        while(rightest.right){
            rightest = rightest.right;
        }

        rightest.right = insertNode;
    }

    return root;
};

/* LC:模拟，这才是聪明的做法！ */
const insertIntoBST = (root, val) => {
    let insertNode = new TreeNode(val);
    if(!root) return insertNode;

    let node = root;
    while(node){
        if(val < node.val){
            if(!node.left){
                node.left = insertNode;
                break;
            }else{
                node = node.left;
            }
        }else{
            if(!node.right){
                node.right = insertNode;
                break;
            }else{
                node = node.right;
            }
        }
    }

    return root;
};

/* 其实上面这个while循环可以写成一个递归 */
const insertIntoBST = (root, val) => {
    let insertNode = new TreeNode(val);
    if(!root) return insertNode;

    const insert = (node, isn) => {
        if(isn.val < node.val){
            if(!node.left) return node.left = isn;
            else insert(node.left, isn);
        }else{
            if(!node.right) return node.right = isn;
            else insert(node.right, isn);
        }
    }

    insert(root, insertNode);

    return root;
};