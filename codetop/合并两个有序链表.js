// 将两个升序链表合并为一个新的升序链表

const func1 = (head1, head2) => {
    let node = new ListNode();
    const dummy = node;

    while(head1 && head2){
        if(head1.val > head2.val){
            node.next = head2;
            head2 = head2.next;
        }else {
            node.next = head1;
            head1 = head1.next;
        }

        node = node.next;
    }

    if(head1) node.next = head1;
    if(head2) node.next = head2;

    return dummy.next;
}