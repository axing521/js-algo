/***
 * @creater:ACBash
 * @create_time:21-11-7 22:9:33
 * @last_modify:ACBash
 * @modify_time:21-11-7 22:52:51
 * @line_count:14
 **/

/* 中序遍历|二分构造|分而治之 */
const sortedArrayToBST = (nums) => {
    if(!nums.length) return null;

    const mid = nums.length >> 1;

    const root = new TreeNode(
        nums[mid],
        sortedArrayToBST(nums.slice(0, mid)),
        sortedArrayToBST(nums.slice(mid + 1))
    );

    return root;
};