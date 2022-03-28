/***
 * @creater:ACBash
 * @create_time:21-12-8 13:52:34
 * @last_modify:ACBash
 * @modify_time:22-3-28 16:47:49
 * @line_count:47
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

const hasCycle = (head) => {
    if(!head) return false;

    let slow = head, fast = head;

    while(fast){
        fast = fast.next && fast.next.next;
        slow = slow.next;

        if(!fast) return false;
        
        if(fast == slow) return true;
    }
};