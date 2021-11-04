/***
 * @creater:ACBash
 * @create_time:21-11-4 11:49:1
 * @last_modify:ACBash
 * @modify_time:21-11-4 13:40:34
 * @line_count:36
 **/

/* 1.中序遍历，O(n) */
const searchBST = (root, val) => {
    let ans = null;

    const inorder = (node) => {
        if(!node) return;

        inorder(node.left);
        if(node.val == val) ans = node;
        inorder(node.right);
    }

    inorder(root);

    return ans;
};

/* 2.定义递归解|二分思想，O(logn) */
const searchBST = (root, val) => {
    if(!root) return null;

    if(root.val == val) return root;
    else if(root.val < val) return searchBST(root.right, val);
    else return searchBST(root.left, val);
};

/* 3.定义迭代解 */
const searchBST = (root, val) => {
    while(root){
        if(root.val == val) return root;
        else if(root.val < val) root = root.right;
        else root = root.left;
    }

    return null;
};