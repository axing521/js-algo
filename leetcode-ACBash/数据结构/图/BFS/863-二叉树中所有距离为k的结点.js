/***
 * @creater:ACBash
 * @create_time:22-1-20 15:53:29
 * @last_modify:ACBash
 * @modify_time:22-1-20 19:18:5
 * @line_count:47
 **/

/* 转化成图，BFS */
const distanceK = (root, target, k) => {
    let graph = {};

    const dfs = (node) => {
        if(!node) return;

        if(node.left) node.left["parent"] = node;
        if(node.right) node.right["parent"] = node;

        dfs(node.left);
        dfs(node.right);
        
        graph[node.val] = [node.parent, node.left, node.right];
    };

    dfs(root);

    let queue = [target], ans = [], visited = new Set();
    visited.add(target);

    while(queue.length){
        if(!k) break;
        const len = queue.length;

        for(let i = 0; i < len; i++){
            const node = queue.shift();
            if(!node) continue;

            const neighbors = graph[node.val];

            for(const neighbor of neighbors){
                if(visited.has(neighbor)) continue;
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }

        k--;
    }

    queue.forEach(node => {
        if(node) ans.push(node.val);
    });

    return ans;
};