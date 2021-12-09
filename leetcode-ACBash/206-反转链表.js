/***
 * @creater:ACBash
 * @create_time:21-12-9 14:41:45
 * @last_modify:ACBash
 * @modify_time:21-12-9 16:35:42
 * @line_count:25
 **/

/* 迭代实现 */
const reverseList = (head) => {
    let pre = null, cur = head;

    while(cur){
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    return pre;
};

/* 递归实现 */
const reverseList = (head) => {
    if(head == null || head.next == null) return head;

    const newHead = reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
};