/***
 * @creater:ACBash
 * @create_time:21-12-9 12:10:25
 * @last_modify:ACBash
 * @modify_time:21-12-9 14:41:47
 * @line_count:135
 **/

/* LC-147的插入排序仍然可以用，但是时间复杂度是O(n^2),怎么变成O(nlogn)？ */
/* 1.自顶向下，空间复杂度O(logn) */
/* 分而治之，归并排序,快慢指针找中点 */
const merge = (head1, head2) => {
    const dummy = new ListNode();
    let temp = dummy, temp1 = head1, temp2 = head2;

    while(temp1 && temp2){
        if(temp1.val <= temp2.val){
            temp.next = temp1;
            temp1 = temp1.next;
        }else{
            temp.next = temp2;
            temp2 = temp2.next;
        }
        temp = temp.next;
    }

    if(temp1) temp.next = temp1;
    if(temp2) temp.next = temp2;

    return dummy.next;
};

const sortList = (head, tail = null) => {
    if(!head) return null;

    if(head.next == tail){
        head.next = null;
        return head;
    }

    let slow = head, fast = head;

    while(fast != tail){
        slow = slow.next;
        fast = fast.next;

        if(fast != tail) fast = fast.next;
    }

    const mid = slow;

    return merge(sortList(head, mid), sortList(mid, tail));
};

/* 2.自底向上,空间O(1) */
const merge = (head1, head2) => {
    const dummy = new ListNode();
    let temp = dummy, temp1 = head1, temp2 = head2;

    while(temp1 && temp2){
        if(temp1.val <= temp2.val){
            temp.next = temp1;
            temp1 = temp1.next;
        }else{
            temp.next = temp2;
            temp2 = temp2.next;
        }
        temp = temp.next;
    }

    if(temp1) temp.next = temp1;
    if(temp2) temp.next = temp2;

    return dummy.next;
};

const sortList = (head) => {
    if(!head) return null;

    const dummy = new ListNode(0, head);
    let len = 0, node = head;

    while(node){
        len++;
        node = node.next;
    }

    for(let subLen = 1; subLen < len; subLen <<= 1){
        let pre = dummy, cur = dummy.next;

        while(cur){
            let head1 = cur;
            for(let i = 1; i < subLen && cur.next; i++){
                cur = cur.next;
            }

            let head2 = cur.next;
            cur.next = null;
            cur = head2;
            for(let i = 1; i < subLen && cur && cur.next; i++){
                cur = cur.next;
            }

            let next = null;
            if(cur){
                next = cur.next;
                cur.next = null;
            }
            cur = next;

            const merged = merge(head1, head2);
            pre.next = merged;

            while(pre.next) pre = pre.next;
        }
    }

    return dummy.next;
};

/* 简单粗暴，性能还特别好，其实有点作弊，这样考察链表的效果就没有了，可以当作后手使用 */
const sortList = (head) => {
    if(!head) return null;

    let arr = [];

    while(head){
        let next = head.next;
        head.next = null;
        arr.push(head);
        head = next;
    }

    arr.sort((a, b) => a.val - b.val);

    for(let i = 0; i < arr.length - 1; i++){
        arr[i].next = arr[i + 1];
    }

    return arr[0];
};

/* 还有一个堆实现的，下次看看 */