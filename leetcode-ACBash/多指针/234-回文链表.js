/***
 * @creater:ACBash
 * @create_time:21-12-9 16:35:39
 * @last_modify:ACBash
 * @modify_time:21-12-9 17:41:12
 * @line_count:89
 **/

/* 双向链表 */
const isPalindrome = (head) => {
    let pre = null, cur = head;

    while(cur){
        cur.prev = pre;
        pre = cur;
        cur = cur.next;
    }

    let forward = head, backward = pre;

    while(forward != backward){
        if(forward.val != backward.val) return false;
        if(forward.next == backward) break;

        forward = forward.next;
        backward = backward.prev;
    }

    return true;
};

/* 打散成数组 */
const isPalindrome = (head) => {
    let arr = [], cur = head;

    while(cur){
        const next = cur.next;
        cur.next = null;
        arr.push(cur.val);
        cur = next;
    }

    let left = 0, right = arr.length - 1;

    while(left < right){
        if(arr[left] != arr[right]) return false;
        left++;
        right--;
    }

    return true;
};

/* 递归 */
const isPalindrome = (head) => {
    let pre = head;

    const dfs = (node) => {
        if(node){
            if(!dfs(node.next)) return false;
            if(node.val != pre.val) return false;
    
            pre = pre.next;
        }
        return true;
    };

    return dfs(head);
};

/* 快慢指针 */
const isPalindrome = (head) => {
    if(!head || !head.next) return true;

    let fast = head.next && head.next.next, slow = head, pre = null;

    while(fast){
        fast = fast.next && fast.next.next;
        slow = slow.next;
    }

    while(slow){
        const next = slow.next;
        slow.next = pre;
        pre = slow;
        slow = next;
    }

    while(head){
        if(head.val != pre.val) return false;

        head = head.next;
        pre = pre.next;
    }

    return true;
};