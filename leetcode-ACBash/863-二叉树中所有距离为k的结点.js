/***
 * @creater:ACBash
 * @create_time:22-1-20 15:53:29
 * @last_modify:ACBash
 * @modify_time:22-1-24 19:58:7
 * @line_count:43
 **/

/* 转化成图，BFS */
const distanceK = (root, target, k) => {
    let graph = {};
    
    const dfs = (node, parent) => {
        if(!node) return;
        
        if(!graph[node.val]) graph[node.val] = [];
        parent && graph[node.val].push(parent);
        node.left && graph[node.val].push(node.left);
        node.right && graph[node.val].push(node.right);

        dfs(node.left, node);
        dfs(node.right, node);
    };

    dfs(root, null);

    let queue = [target], ans = [], visited = new Set();

    while(queue.length){
        const len = queue.length;

        for(let i = 0; i < len; i++){
            const node = queue.shift();
            visited.add(node);
            ans.push(node.val);
            
            const neighbors = graph[node.val];

            for(const neighbor of neighbors){
                if(visited.has(neighbor)) continue;
                queue.push(neighbor);
            }
        }

        if(!k--) break;

        ans = [];
    }

    return ans;
};