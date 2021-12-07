/***
 * @creater:ACBash
 * @create_time:21-12-7 15:29:18
 * @last_modify:ACBash
 * @modify_time:21-12-7 16:23:35
 * @line_count:33
 **/

const reverseBetween = (head, left, right) => {
    let node = new ListNode(), index = 1, pre = null, reverseTail = null;
    const dummy = node;

    while(head){
        while(index >= left && index <= right){
            //核心反转代码
            const next = head.next;
            head.next = pre;
            pre = head;
            head = next;

            if(index == left) reverseTail = pre;

            index++;
        }

        if(index > right){
            node.next = pre;
            reverseTail.next = head;
            break;
        }

        node.next = head;
        node = node.next;
        head = head.next;
        node.next = null;
        
        index++;
    }

    return dummy.next;
};