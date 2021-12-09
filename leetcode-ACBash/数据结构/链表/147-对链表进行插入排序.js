/***
 * @creater:ACBash
 * @create_time:21-12-8 16:24:8
 * @last_modify:ACBash
 * @modify_time:21-12-9 12:27:41
 * @line_count:85
 **/

/* 两层while，外层遍历要插入的节点，内层遍历已排序的链表 */
const insertionSortList = (head) => {
    let node = new ListNode(-Infinity), pre = null, flag = false;
    const dummy = node;

    while(head){
        const headNext = head.next;

        node = dummy;

        while(node){
            if(head.val < node.val){
                head.next = node;
                pre.next = head;
                flag = true;
                break;
            }
            pre = node;
            node = node.next;
        }

        if(!flag){
            pre.next = head;
            head.next = null;
        }
        
        flag = false;
        head = headNext;
    }

    return dummy.next;
};

/* LC官方题解 */
const insertionSortList = (head) => {
    if(!head) return null;

    const dummy = new ListNode(0, head);
    let cur = head.next, tail = head;

    while(cur){
        if(cur.val >= tail.val) tail = tail.next;
        else{
            let node = dummy;

            while(node.next.val < cur.val) node = node.next;
            
            tail.next = cur.next;
            cur.next = node.next;
            node.next = cur;
        }

        cur = tail.next;
    }

    return dummy.next;
};

/* Lucifer,完美融合 */
const insertionSortList = (head) => {
    const dummy = new ListNode(-Infinity);
    let tail = dummy;

    while(head){
        const headNext = head.next;
        let node = dummy;

        if(tail.val <= head.val){
            tail.next = head;
            tail = tail.next;
            head.next = null;
            head = headNext;
            continue;
        }
        
        while(node.next && node.next.val < head.val) node = node.next;

        head.next = node.next;
        node.next = head;
        
        head = headNext;
    }

    return dummy.next;
};