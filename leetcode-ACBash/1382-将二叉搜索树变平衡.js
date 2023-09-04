/***
 * @creater:ACBash
 * @create_time:21-12-15 12:39:29
 * @last_modify:ACBash
 * @modify_time:21-12-15 13:13:44
 * @line_count:30
 **/

/* 跟LC-108一样 */
const balanceBST = (root) => {
    let inorder = [];

    const inorderTraversal = (node) => {
        if(!node) return;
        
        inorderTraversal(node.left);
        inorder.push(node.val);
        inorderTraversal(node.right);
    };

    inorderTraversal(root);

    const dfs = (nums, start = 0, end = nums.length) => {
        if(start >= end) return null;

        const mid = (start + end) >> 1;

        let root = new TreeNode(
            nums[mid],
            dfs(nums, start, mid),
            dfs(nums, mid + 1, end)
        )

        return root;
    };

    return dfs(inorder);
};