/***
 * @creater:ACBash
 * @create_time:22-2-28 17:49:12
 * @last_modify:ACBash
 * @modify_time:22-3-1 15:15:10
 * @line_count:73
 **/

/* 后序遍历，dfs，自底向上 */
const invertTree = (root) => {
    if(!root) return null;

    const left = invertTree(root.left);
    const right = invertTree(root.right);
    
    root.left = right;
    root.right = left;

    return root;
};

/* 前序遍历，bfs，自顶向下 */
const invertTree = (root) => {
    if(!root) return null;
    
    let queue = [root];

    while(queue.length){
        const top = queue.shift();

        [top.left, top.right] = [top.right, top.left];
        
        top.left && queue.push(top.left);
        top.right && queue.push(top.right);
    }

    return root;
};

/* bfs,写出遍历，再由遍历构造反转的二叉树 */
const invertTree = (root) => {
    if(!root) return null;
    
    let queue = [root], list = [];

    while(queue.length){
        const top = queue.shift();

        if(top){
            list.unshift(top.val);
            queue.push(top.left);
            queue.push(top.right);
        }else{
            list.unshift("x");
        }
    }

    let cursor = list.length - 2, invertRoot = new TreeNode(list[list.length - 1]), invertQueue = [invertRoot];

    while(cursor >= 0){
        const top = invertQueue.shift();
        const right = list[cursor];
        const left = list[cursor - 1];
        
        if(right != "x"){
            const rightNode = new TreeNode(right);
            top.right = rightNode;
            invertQueue.push(rightNode);
        }
        
        if(left != "x"){
            const leftNode = new TreeNode(left);
            top.left = leftNode;
            invertQueue.push(leftNode);
        }

        cursor -= 2;
    }

    return invertRoot;
};