/***
 * @creater:ACBash
 * @create_time:21-10-11 16:20:18
 * @last_modify:ACBash
 * @modify_time:21-10-11 21:5:52
 * @line_count:104
 **/

/* 毁灭吧，属于是寄了 */
const removeZeroSumSublists = (head) => {
    const temp = [];
    while (temp) {
        temp.push(head.val)
        head = head.next
    }
    let maxWin = {left:0,right:0};
    let pre = new Array(temp.length).fill(0);
    pre[0] = temp[0];
    for(let i=1; i<temp.length; i++){
        pre[i] = pre[i-1] + temp[i];
    }

    for(let i=0; i<temp.length; i++){
        for(let j=0; j<temp.length; j++){
            if(i === 0){
                if(pre[j] === 0){
                    maxWin.right = j;
                }

            }else{
                if(pre[j] - pre[i-1] === 0 && j-i+1 > maxWin.right-maxWin.left){
                    maxWin.left = i;
                    maxWin.right = j;
                }
            }
        }
    }
    temp.splice(maxWin.left, maxWin.right-maxWin.left+1);

    let node = null
    if (temp.length) {
        node = new ListNode(temp[0])
        let cur = node
        let i = 1
        while (temp[i]) {
            cur.next = new ListNode(temp[i])
            cur = cur.next
            i ++
        }
    }
    return node
};

/* LC:链表转数组处理，最后再转回链表。滑动窗口，双指针遍历 */
const removeZeroSumSublists = (head) => {
    const temp = [];
    while(head){
        temp.push(head.val);
        head = head.next;
    }
    for(let i=0; i<temp.length; i++){
        let sum = temp[i];
        if(sum === 0){
            temp.splice(i,1);
            i--;
        }else{
            for(let j=i+1; j<temp.length; j++){
                sum += temp[j];
                if(sum === 0){
                    temp.splice(i,j-i+1);
                    i--;
                    break;
                }
            }
        }
    }
    let node = null;
    if(temp.length){
        node = new ListNode(temp[0]);
        let cur = node;
        let i = 1;
        while(temp[i]){
            cur.next = new ListNode(temp[i]);
            cur = cur.next;
            i++;
        }
    }
    return node;
};

/* LC：很牛逼，两个节点的前缀和一样=>中间的节点全扔。
 * 为此，用hash表存储前缀和与节点的映射
 * 多个相同的前缀和，反复覆盖即可，说明有更长的和为0的区间
 */
const removeZeroSumSublists = (head) => {
    let newList = new ListNode(0);
    newList.next = head;
    let sum = 0;
    let hash = {};

    for(let node=newList; node!=null; node=node.next){
        sum += node.val;
        hash[sum] = node;
    }
    sum = 0;
    for(let node=newList; node!=null; node=node.next){
        sum += node.val;
        node.next = hash[sum].next;
    }

    return newList.next;
};