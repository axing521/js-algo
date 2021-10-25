/***
 * @creater:ACBash
 * @create_time:21-10-25 17:18:32
 * @last_modify:ACBash
 * @modify_time:21-10-25 19:31:48
 * @line_count:23
 **/

/* 跟LC-102很像 */
const zigzagLevelOrder = (root) => {
    if(!root) return [];
    let ans = [], queue = [root,null], levelNodes = [], flag = true;

    while(queue.length){
        const cur = queue.shift();

        if(cur){
            flag ? levelNodes.push(cur.val) : levelNodes.unshift(cur.val);
            if(cur.left) queue.push(cur.left);
            if(cur.right) queue.push(cur.right);
            
        }else{
            flag = !flag;
            ans.push(levelNodes);
            levelNodes = [];
            if(queue.length) queue.push(null);
        }
    }

    return ans;
};