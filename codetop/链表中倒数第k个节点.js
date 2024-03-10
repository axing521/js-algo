// 返回链表中倒数第k个节点
// 遍历两遍，第一遍确定链表长度，第二表控制遍历长度找到倒数第k个节点

const func1 = (head, k) => {
    let node = head, n = 0;

    while(node){
        n++;
        node = node.next;
    }

    node = head;

    for(let i = 0; i < n - k; i++){
        node = node.next;
    }

    return node;
};  

// 遍历一遍，但要用两个node，让其中一个先走k步，然后一起走直到第一个为null

const func2 = (head, k) => {
    let fast = head, slow = head;

    while(fast){
        if(k == 0) slow = slow.next;
        fast = fast.next;
        if(k != 0) k--;
    }

    return slow;
};