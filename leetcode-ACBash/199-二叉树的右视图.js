/***
 * @creater:ACBash
 * @create_time:21-10-26 21:29:20
 * @last_modify:ACBash
 * @modify_time:21-10-27 14:34:12
 * @line_count:21
 **/

/* BFS,层序遍历，拿捏 */
const rightSideView = (root) => {
    if(!root) return [];
    let ans = [], queue = [root, null], last = null;

    while(queue.length){
        const cur = queue.shift();

        if(cur){
            last = cur.val;
            if(cur.left) queue.push(cur.left);
            if(cur.right) queue.push(cur.right);
        }else{
            ans.push(last);
            last = null;
            if(queue.length) queue.push(null);
        }
    }

    return ans;
};