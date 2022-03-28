/***
 * @creater:ACBash
 * @create_time:21-12-5 16:59:20
 * @last_modify:ACBash
 * @modify_time:22-3-28 19:42:25
 * @line_count:89
 **/

/* 1.用集合，空间记录换时间，时间O(n),空间O(n) */
const detectCycle = (head) => {
    let set = new Set(), node = head;

    while(node){
        if(set.has(node)) return node;

        set.add(node);
        node = node.next;
    }

    return null;
};

/* 2.双指针，数学，L + C = (L + 2C + D) / 2，时间O(n),空间O(1) */
const detectCycle = (head) => {
    let fast = head, slow = head, inquire = fast && fast.next;

    while(inquire){
        fast = inquire.next;
        inquire = fast && fast.next;
        slow = slow.next;

        if(fast == slow) break;
    }

    if(inquire){
        fast = head;

        while(fast != slow){
            fast = fast.next;
            slow = slow.next;
        }

        return fast;
    }

    return null;
};

const detectCycle = (head) => {
    if(!head) return null;

    let slow = head, fast = head;

    while(fast){
        fast = fast.next && fast.next.next;
        slow = slow.next;

        if(!fast) return null;

        if(fast == slow){
            fast = head;
            break;
        }
    }

    while(fast != slow){
        fast = fast.next;
        slow = slow.next;
    }

    return fast;
};

const detectCycle = (head) => {
    if(!head) return null;

    let slow = head, fast = head;

    while(fast){
        fast = fast.next && fast.next.next;
        slow = slow.next;

        if(!fast) return null;

        if(fast == slow){
            fast = head;
            break;
        }
    }

    while(fast != slow){
        fast = fast.next;
        slow = slow.next;
    }

    return fast;
};