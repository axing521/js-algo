/***
 * @creater:ACBash
 * @create_time:21-12-14 17:4:18
 * @last_modify:ACBash
 * @modify_time:21-12-15 12:39:31
 * @line_count:53
 **/

/* 和LC-108一样，不过不是有序数组，而是有序链表 */
/* 快慢指针找中点，断开链接，以及注意头尾边界情况 */
const sortedListToBST = (head) => {
    if(!head) return null;

    let fast = head.next && head.next.next, slow = head, pre = null;

    while(fast){
        fast = fast.next && fast.next.next;
        pre = slow;
        slow = slow.next;
    }

    if(pre) pre.next = null;
    else head = null;

    let root = new TreeNode(
        slow.val,
        sortedListToBST(head),
        sortedListToBST(slow.next)
    );
    
    return root;
};

/* 链表转数组做法 */
const sortedListToBST = (head) => {
    let arr = [];

    while(head){
        const next = head.next;
        head.next = null;
        arr.push(head.val);
        head = next;
    }

    const dfs = (nums) => {
        if(!nums.length) return null;

        const mid = nums.length >> 1;

        let root = new TreeNode(
            nums[mid],
            dfs(nums.slice(0, mid)),
            dfs(nums.slice(mid + 1))
        )

        return root;
    };

    return dfs(arr);
};
