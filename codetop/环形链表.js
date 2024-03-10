// 给定一个链表头节点head, 判断链表中是否有环
// 快慢指针，龟兔赛跑，如果fast为空那么false，如果fast==slow那么true

const func1 = (head) => {
    if(!head) return false;

    let slow = head, fast = head;

    while(fast){
        fast = fast.next && fast.next.next;
        slow = slow.next;

        if(!fast) return false;
        if(fast == slow) return true;
    }
};