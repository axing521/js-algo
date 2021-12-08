/***
 * @creater:ACBash
 * @create_time:21-12-8 14:20:5
 * @last_modify:ACBash
 * @modify_time:21-12-8 16:24:11
 * @line_count:75
 **/

/* 打散成数组，双指针,注意边界条件 */
const reorderList = (head) => {
    const arr = [];
    let p;

    while(head){
        p = head.next;
        head.next = null;
        arr.push(head);
        head = p;
    }

    let [left, right] = [0, arr.length - 1];

    while(left < right){
        arr[left].next = arr[right];
        if(left + 1 != right) arr[right].next = arr[left + 1];
        left++;
        right--;
    }

    return arr[0];
};

/* 双指针用栈解释,API没有index快 */
const reorderList = (head) => {
    let arr = [];

    while(head){
        const temp = head.next;
        head.next = null;
        arr.push(head);
        head = temp;
    }

    let node = arr.shift(), index = 0, ans = node;

    while(arr.length){
        node.next = ++index % 2 == 0 ? arr.shift() : arr.pop();
        node = node.next;
    }

    return ans;
};

/* 快慢指针找中点，反转右边链表，拆分节点 */
const reorderList = (head) => {
    let fast = head.next && head.next.next, slow = head, tail = head.next || head, pre = null;

    while(fast){
        tail = fast.next || fast;
        fast = fast.next && fast.next.next;
        slow = slow.next;
    }

    while(slow){
        const next = slow.next;
        slow.next = pre;
        pre = slow;
        slow = next;
    }

    let node = head;

    while(node && node != tail){
        const next = node && node.next, tailNext = tail && tail.next;
        if(tail) tail.next = next;
        if(node) node.next = tail;

        node = next;
        tail = tailNext;
    }

    return head;
};