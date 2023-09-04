/***
 * @creater:ACBash
 * @create_time:22-11-6 18:24:46
 * @last_modify:ACBash
 * @modify_time:22-11-15 15:9:42
 * @line_count:37
 **/

//head-tail的翻转
const reverseK = (head, tail) => {
    let prev = tail.next;   //这个很关键，把下一段的头节点当作当前翻转段的前置节点，以便翻转让head指向下一段
    let node = head;

    while(prev != tail){
        let next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }

    return [tail, head];
};

//总而言之，一个虚节点hair用来记录整个链表，一个pre记录上一段的尾节点，一个head记录正在翻转的k组的头节点，一个tail记录正在翻转的k组的尾节点
const reverseKGroup = (head, k) => {
    let hair = new ListNode(-1);
    hair.next = head;
    let pre = hair, tail = hair;
    
    while(head){
        for(let i = 0; i < k; i++){
            tail = tail.next;
            if(tail == null) return hair.next;
        }

        const [newHead, newTail] = reverseK(head, tail);

        pre.next = newHead;
        pre = newTail;
        head = pre.next;
        tail = newTail;
    }

    return hair.next;
};