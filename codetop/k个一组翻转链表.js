// 给定链表头节点head，每k个一组进行翻转，返回修改后的链表
// 一个虚节点hair用来记录整个链表，一个pre记录上一段的尾节点，一个head记录正在翻转的k组的头节点，一个tail记录正在翻转的k组的尾节点

const reverseK = (head, tail) => {
    let prev = tail.next;
    let node = head;

    while(prev != tail){
        let next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }

    return [tail, head];
};

const func1 = (head, k) => {
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