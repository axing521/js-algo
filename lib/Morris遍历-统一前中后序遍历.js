/***
 * @creater:ACBash
 * @create_time:21-10-31 16:24:42
 * @last_modify:ACBash
 * @modify_time:21-10-31 16:44:41
 * @line_count:63
 **/

/* Morris是二叉树遍历的至强算法，不用递归也不用额外的栈空间 */
/* 模板 */

/* 前序遍历 */
const preorderTraversal = (root) => {
    let ans = [], node = root, pred = null;

    while(node){
        ans.push(node.val); //added
        pred = node.left;
        if(pred){   //找左子树的最左节点
            while(pred.left && pred.left != node){
                pred = pred.left;
            }

            if(pred.left == node){
                /* ans.push(node.val); */
                ans.push(pred.val);
                node = node.right;  
            }else{
                pred.left = node;
                node = node.left;
            }

        }else{
            /* ans.push(node.val); */
            node = node.right;
        }
    }

    return ans;
};

/* 中序遍历 */
const inorderTraversal = (root) => {
    let ans = [], node = root, pred = null;

    while(node){
        pred = node.left;
        if(pred){
            while(pred.right && pred.right != node){
                pred = pred.right;
            }

            if(pred.right == node){
                ans.push(node.val);
                node = node.right;  //报告长官，左边的已经探索完了，请您往右边走吧！
            }else{
                pred.right = node;
                node = node.left;
            }

        }else{
            ans.push(node.val);
            node = node.right;
        }
    }

    return ans;
};

/* 后序遍历 */
