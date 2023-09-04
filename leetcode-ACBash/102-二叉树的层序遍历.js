/***
 * @creater:ACBash
 * @create_time:21-10-24 16:43:45
 * @last_modify:ACBash
 * @modify_time:22-11-20 9:49:47
 * @line_count:61
 **/

/* BFS|队列 */
const levelOrder = (root) => {
    if(!root) return [];
    let ans = [], queue = [root,null], levelNodes = [];

    while(queue.length){
        const top = queue.shift();

        if(top){
            levelNodes.push(top.val);
            if(top.left) queue.push(top.left);
            if(top.right) queue.push(top.right);
        }else{
            ans.push(levelNodes);
            levelNodes = [];
            if(queue.length) queue.push(null);
        }
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