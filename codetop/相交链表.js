// 给定两个单链表的头节点，找出两个链表相交的起始节点，否则返回null
// 类似龟兔赛跑，但不是快慢指针，而是赛道转换

const func1 = (headA, headB) => {
    if(headA == null || headB == null){
        return null;
    }

    let pA = headA, pB = headB;

    while(pA != pB){
        pA = pA == null ? headB : pA.next;
        pB = pB == null ? headA : pB.next;
    }

    return pA;
};