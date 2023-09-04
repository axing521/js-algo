/***
 * @creater:ACBash
 * @create_time:22-5-20 15:16:54
 * @last_modify:ACBash
 * @modify_time:22-11-20 9:48:39
 * @line_count:110
 **/

/* 以LC-116为例 */
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

//LC-102，二叉树层序遍历，bfs实现
const levelOrder = (root) => {
    if(!root) return [];
    let queue = [root];
    let ans = [];
    
    while(queue.length){
        const len = queue.length;
        let level = [];
        for(let i = 0; i < len; i++){
            const top = queue.shift();
            level.push(top.val);
            top.left && queue.push(top.left);
            top.right && queue.push(top.right);
        }
        ans.push(level);
    }

    return ans;
};

//LC-102，二叉树层序遍历，bfs实现
const levelOrder = (root) => {
    if(!root) return [];
    let queue = [root];
    let ans = [];
    
    while(queue.length){
        const len = queue.length;
        let level = [];
        for(let i = 0; i < len; i++){
            const top = queue.shift();
            level.push(top.val);
            top.left && queue.push(top.left);
            top.right && queue.push(top.right);
        }
        ans.push(level);
    }

    return ans;
};

//LC-102，二叉树层序遍历，递归实现
const levelOrder = (root) => {
    let ans = [];

    const dfs = (node, depth) => {
        if(!node) return;

        if(ans.length < depth + 1) ans.push([]);
        
        ans[depth].push(node.val);
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    };

    dfs(root, 0);

    return ans;
};