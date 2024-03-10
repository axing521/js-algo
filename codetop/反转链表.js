// 给定链表头节点head，返回反转后的链表

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