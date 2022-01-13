/***
 * @creater:ACBash
 * @create_time:22-1-12 21:34:11
 * @last_modify:ACBash
 * @modify_time:22-1-13 20:15:13
 * @line_count:75
 **/

/* 想象成二叉堆的模型 */
/* BFS */
const widthOfBinaryTree = (root) => {
    if(!root) return 0;

    let ans = 0, left = 0, right = 0, queue = [[root, 0]];

    while(queue.length){
        left = queue[0][1];

        const len = queue.length;
        for(let i = 0; i < len; i++){
            const [node, pos] = queue.shift();

            right = pos;
            
            if(node.left) queue.push([node.left, 2 * (pos - left)]);
            if(node.right) queue.push([node.right, 2 * (pos - left) + 1]);
        }

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
};

/* BFS,哨兵策略 */
const widthOfBinaryTree = (root) => {
    if(!root) return 0;

    let ans = 0, left = 0, right = 0, queue = [[root, 0], null];

    while(queue.length){
        const top = queue.shift();

        if(top){
            const [node, pos] = top;

            right = pos;

            if(node.left) queue.push([node.left, 2 * (pos - left)]);
            if(node.right) queue.push([node.right, 2 * (pos - left) + 1]);
        }else{
            ans = Math.max(ans, right - left + 1);

            if(queue.length){
                queue.push(null);
                left = queue[0][1];
            }
        }
    }

    return ans;
};

/* DFS,会遇到大数，使用BigInt */
const widthOfBinaryTree = (root) => {
    if(!root) return 0;

    let ans = 0n, map = new Map();

    const dfs = (node, level, pos) => {
        if(!map.has(level)) map.set(level, pos);
        
        const val = pos - map.get(level) + 1n;
        if(val > ans) ans = val;

        node.left && dfs(node.left, level + 1, pos * 2n + 1n);
        node.right && dfs(node.right, level + 1, pos * 2n + 2n);
    };

    dfs(root, 0, 0n);

    return ans;
};