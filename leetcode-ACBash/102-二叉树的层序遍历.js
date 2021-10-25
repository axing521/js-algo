/***
 * @creater:ACBash
 * @create_time:21-10-24 16:43:45
 * @last_modify:ACBash
 * @modify_time:21-10-25 17:18:31
 * @line_count:29
 **/

/* BFS,队列 */
const levelOrder = (root) => {
    if(!root) return [];
    const items = [];
    const queue = [root,null];  //待访问队列
    let levelNodes = [];

    while(queue.length > 0){
        const t = queue.shift();

        if(t){
            levelNodes.push(t.val);
            if(t.left){
                queue.push(t.left);
            }
            if(t.right){
                queue.push(t.right);
            }
        }else{
            items.push(levelNodes);
            levelNodes = [];
            if(queue.length > 0){
                queue.push(null);
            }
        }
    }

    return items;
};