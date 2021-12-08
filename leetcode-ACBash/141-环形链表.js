/***
 * @creater:ACBash
 * @create_time:21-12-8 13:52:34
 * @last_modify:ACBash
 * @modify_time:21-12-8 14:20:7
 * @line_count:32
 **/

/* 集合的办法，多用空间 */
const hasCycle = (head) => {
    let set = new Set();
    
    while(head){
        if(set.has(head)) return true;

        set.add(head);
        head = head.next;
    }

    return false;
};

/* 快慢指针 */
const hasCycle = (head) => {
    let fast = head, slow = head, inquire = fast && fast.next;

    while(inquire){
        fast = inquire.next;
        slow = slow.next;

        if(fast == slow){
            fast = head;
            return true;
        }

        inquire = fast && fast.next;
    }

    return false;
};