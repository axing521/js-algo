/***
 * @creater:ACBash
 * @create_time:21-10-25 19:31:46
 * @last_modify:ACBash
 * @modify_time:21-10-26 19:53:51
 * @line_count:25
 **/

/* BFS,层序遍历，找多少层就行，和102，103差不多啊 */
const maxDepth = (root) => {
    if(!root) return 0;
    let ans = 0, queue = [root,null];

    while(queue.length){
        const cur = queue.shift();

        if(cur){
            if(cur.left) queue.push(cur.left);
            if(cur.right) queue.push(cur.right);
        }else{
            ans++;
            if(queue.length) queue.push(null);
        }
    }

    return ans;
};

/* DFS,用递归，是真牛逼啊 */
const maxDepth = (root) => {
    if(!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};