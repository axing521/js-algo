/***
 * @creater:ACBash
 * @create_time:21-12-7 14:57:31
 * @last_modify:ACBash
 * @modify_time:21-12-7 15:29:20
 * @line_count:23
 **/

/* 分两个dummy，注意过河拆桥 */
const partition = (head, x) => {
    let nodeL = new ListNode(), nodeH = new ListNode();
    const dummyL = nodeL, dummyH = nodeH;

    while(head){
        if(head.val < x){
            nodeL.next = head;
            nodeL = nodeL.next;
            head = head.next;
            nodeL.next = null;
        }else{
            nodeH.next = head;
            nodeH = nodeH.next;
            head = head.next;
            nodeH.next = null;
        }
    }

    nodeL.next = dummyH.next;

    return dummyL.next;
};