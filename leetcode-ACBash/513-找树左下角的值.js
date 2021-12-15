/***
 * @creater:ACBash
 * @create_time:21-12-15 13:13:28
 * @last_modify:ACBash
 * @modify_time:21-12-15 18:3:12
 * @line_count:18
 **/

/* BFS */
const findBottomLeftValue = (root) => {
    let queue = [root, null], ans = null;

    while(queue.length){
        let node = queue.shift();

        if(node){
            if(ans == null) ans = node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }else{
            if(!queue.length) return ans;
            queue.push(null);
            ans = null;
        }
    }
};