/***
 * @creater:ACBash
 * @create_time:21-10-24 16:43:45
 * @last_modify:ACBash
 * @modify_time:21-10-30 17:29:42
 * @line_count:21
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