/***
 * @creater:ACBash
 * @create_time:21-11-7 22:9:33
 * @last_modify:ACBash
 * @modify_time:21-12-14 18:27:4
 * @line_count:29
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

/* 避免slice的额外空间开销 */
const sortedArrayToBST = (nums, start = 0, end = nums.length) => {
    if(start >= end) return null;

    const mid = (start + end) >> 1;

    let root = new TreeNode(
        nums[mid],
        sortedArrayToBST(nums, start, mid),
        sortedArrayToBST(nums, mid + 1, end)
    );

    return root;
};