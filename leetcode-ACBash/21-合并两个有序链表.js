/***
 * @creater:ACBash
 * @create_time:21-12-6 18:9:13
 * @last_modify:ACBash
 * @modify_time:22-11-17 10:11:42
 * @line_count:50
 **/

const mergeTwoLists = (list1, list2) => {
    let node = new ListNode();
    const dummy = node;

    while(list1 || list2){
        if(list1 && list2){
            if(list1.val > list2.val){
                node.next = list2;
                node = node.next;
                list2 = list2.next;
            }else{
                node.next = list1;
                node = node.next;
                list1 = list1.next;
            }
        }else if(!list1){
            node.next = list2;
            node = node.next;
            list2 = list2.next;
        }else if(!list2){
            node.next = list1;
            node = node.next;
            list1 = list1.next;
        }
    }

    return dummy.next;
};

/* 更优雅的写法 */
const mergeTwoLists = (list1, list2) => {
    let node = new ListNode();
    const dummy = node;

    while(list1 && list2){
        if(list1.val > list2.val){
            node.next = list2;
            list2 = list2.next;
        }else{
            node.next = list1;
            list1 = list1.next;
        }
        node = node.next;
    }

    if(list1) node.next = list1;
    if(list2) node.next = list2;

    return dummy.next;
};