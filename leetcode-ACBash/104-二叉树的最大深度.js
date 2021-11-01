/***
 * @creater:ACBash
 * @create_time:21-10-25 19:31:46
 * @last_modify:ACBash
 * @modify_time:21-11-1 15:42:2
 * @line_count:25
 **/

/* 1.BFS,层序遍历，找多少层就行，和102，103差不多啊 */
const maxDepth = (root) => {
    if(!root) return 0
    let queue = [root, null], ans = 0;

    while(queue.length){
        const top = queue.shift();

        if(top){
            if(top.left) queue.push(top.left);
            if(top.right) queue.push(top.right);
        }else{
            ans++;
            if(queue.length) queue.push(null);
        }
    }

    return ans;
};

/* 2.DFS,用递归，是真牛逼啊 */
const maxDepth = (root) => {
    if(!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};