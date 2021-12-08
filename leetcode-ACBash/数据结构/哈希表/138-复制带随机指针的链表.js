/***
 * @creater:ACBash
 * @create_time:21-12-7 16:23:29
 * @last_modify:ACBash
 * @modify_time:21-12-8 13:52:36
 * @line_count:36
 **/

/* API怪，递归（回溯），哈希表,时间O(2n),空间O(n) */
const copyRandomList = (head, cachedNode = new Map()) => {
    if(!head) return null;

    if(!cachedNode.has(head)){
        cachedNode.set(head, {"val": head.val});
        Object.assign(cachedNode.get(head), {"next": copyRandomList(head.next, cachedNode), "random": copyRandomList(head.random, cachedNode)});
    }

    return cachedNode.get(head);
};

/* 3次迭代，节点拆分的技巧,时间O(3n),空间O(1) */
const copyRandomList = (head) => {
    if(!head) return null;

    for(let node = head; node != null; node = node.next.next){
        const nodeNew = new Node(node.val, node.next, null);
        node.next = nodeNew;
    }

    for(let node = head; node != null; node = node.next.next){
        const nodeNew = node.next;
        nodeNew.random = (node.random != null) ? node.random.next : null;
    }

    const headNew = head.next;

    for(let node = head; node != null; node = node.next){
        const nodeNew = node.next;
        node.next = node.next.next;
        nodeNew.next = (nodeNew.next != null) ? nodeNew.next.next : null;
    }

    return headNew;
};