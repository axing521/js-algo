/***
 * @creater:ACBash
 * @create_time:22-1-20 19:18:3
 * @last_modify:ACBash
 * @modify_time:22-1-22 16:37:28
 * @line_count:98
 **/

/* 中序遍历找不符合要求的节点，两种case */
const recoverTree = (root) => {
    let node1 = null, node1Next = null, node2 = null, pre = new TreeNode(-Infinity); 

    const inorder = (node) => {
        if(!node) return;

        inorder(node.left);
        
        if(node.val < pre.val){
            if(!node1){
                node1 = pre;
                node1Next = node;
            }else node2 = node;
        }
        pre = node;

        inorder(node.right);
    }

    inorder(root);

    if(!node2) node2 = node1Next;

    [node1.val, node2.val] = [node2.val, node1.val];
};

/* &用到中序遍历，还可以迭代实现，手动维护栈，或者Morris，O(1)空间 */
/* Morris,缺点是修改了原二叉树 */
const recoverTree = (root) => {
    let node1 = null, node1Next = null, node2 = null, pre = new TreeNode(-Infinity), node = root, pred = null;

    while(node){
        pred = node.left;

        if(pred){
            while(pred.right && pred["next"] != node){
                pred = pred.right;
            }

            if(pred["next"] == node){
                if(node.val < pre.val){
                    if(!node1){
                        node1 = pre;
                        node1Next = node;
                    }else node2 = node;
                }
                pre = node;

                node = node.right || node["next"];
            }else{
                pred["next"] = node;
                node = node.left;
            }
        }else{
            if(node.val < pre.val){
                if(!node1){
                    node1 = pre;
                    node1Next = node;
                }else node2 = node;
            }
            pre = node;

            node = node.right || node["next"];
        }
    }
    
    if(!node2) node2 = node1Next;
    [node1.val, node2.val] = [node2.val, node1.val];
};

/* 迭代 */
const recoverTree = (root) => {
    let node = root, stack = [];
    let node1 = null, node1Next = null, node2 = null, pre = new TreeNode(-Infinity);

    while(node || stack.length){
        while(node){
            stack.push(node);
            node = node.left;
        }

        node = stack.pop();

        if(node.val < pre.val){
            if(!node1){
                node1 = pre;
                node1Next = node;
            }else node2 = node;
        }
        pre = node;

        node = node.right;
    }

    if(!node2) node2 = node1Next;
    [node1.val, node2.val] = [node2.val, node1.val];
};