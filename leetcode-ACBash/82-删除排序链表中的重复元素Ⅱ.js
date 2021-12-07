/***
 * @creater:ACBash
 * @create_time:21-12-6 19:1:13
 * @last_modify:ACBash
 * @modify_time:21-12-7 14:48:5
 * @line_count:32
 **/

/* 考虑的边界条件比较多，写出bug free的代码有点难度 */
const deleteDuplicates = (head) => {
    let node = new ListNode(), duplicateNum = -101;
    const dummy = node;

    while(head){
        const inquire = head.next;

        if(head.val == duplicateNum){
            head = head.next;
            continue;
        }

        if(!inquire){
            node.next = head;
            break;
        }

        if(head.val == inquire.val){
            duplicateNum = head.val;
            head = inquire.next;
            continue;
        }

        node.next = head;
        node = node.next;
        head = head.next;
        node.next = null;
    }

    return dummy.next;
};