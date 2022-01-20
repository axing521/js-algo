/***
 * @creater:ACBash
 * @create_time:22-1-18 21:31:23
 * @last_modify:ACBash
 * @modify_time:22-1-20 14:32:11
 * @line_count:88
 **/

/* BFS,有哨兵 */
const connect = (root) => {
    if(!root) return null;

    let queue = [root, null], last = null, top;

    while(queue.length){
        top = queue.shift();

        if(top){
            if(last) last.next = top;
            top.left && queue.push(top.left);
            top.right && queue.push(top.right);
            last = top;
        }else{
            last.next = null;
            last = null;
            if(queue.length) queue.push(null);
        }
    }

    return root;
};

/* BFS,无哨兵 */
const connect = (root) => {
    if(!root) return null;
    
    let queue = [root], last = null;

    while(queue.length){
        const len = queue.length;

        for(let i = 0; i < len; i++){
            const node = queue.shift();
            
            if(last) last.next = node;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            last = node;
        }

        last.next = null;
        last = null;
    }

    return root;
};

/* 利用已经建立的next指针 */
const connect = (root) => {
    if(!root) return null;
    
    let leftMost = root, node = null;

    while(leftMost){
        node = leftMost;
        
        while(node){
            if(node.left) node.left.next = node.right;

            if(node.right && node.next) node.right.next = node.next.left;

            node = node.next;
        }

        leftMost = leftMost.left;
    }

    return root;
};

/* DFS递归 */
const connect = (root) => {
    const dfs = (node) => {
        if(!node) return null;

        if(node.left) node.left.next = node.right;
        if(node.right && node.next) node.right.next = node.next.left;

        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);

    return root;
};