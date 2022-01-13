/***
 * @creater:ACBash
 * @create_time:22-1-12 21:34:11
 * @last_modify:ACBash
 * @modify_time:22-1-13 13:42:16
 * @line_count:53
 **/

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