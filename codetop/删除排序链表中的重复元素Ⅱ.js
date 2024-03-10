// 给定一个已经排序的链表head，返回删除所有重复数字的节点的链表

const func1 = (head) => {
    let node = new ListNode(), duplicateNum = -Infinity;
    const hair = node;

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

    return hair.next;
};