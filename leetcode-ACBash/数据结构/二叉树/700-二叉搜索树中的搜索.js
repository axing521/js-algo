/***
 * @creater:ACBash
 * @create_time:21-11-4 11:49:1
 * @last_modify:ACBash
 * @modify_time:21-11-4 13:34:3
 * @line_count:25
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