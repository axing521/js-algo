/***
 * @creater:ACBash
 * @create_time:21-12-7 14:48:3
 * @last_modify:ACBash
 * @modify_time:21-12-7 14:57:34
 * @line_count:26
 **/

/* 和LC-82一样，不过这个不是全部删，留一个，那么就不用考虑duplicateNum，边界条件少一点 */
const deleteDuplicates = (head) => {
    let node = new ListNode();
    const dummy = node;

    while(head){
        const inquire = head.next;

        if(!inquire){
            node.next = head;
            break;
        }

        if(head.val == inquire.val){
            head = head.next;
            continue;
        }

        node.next = head;
        node = node.next;
        head = head.next;
        node.next = null;
    }

    return dummy.next;
};