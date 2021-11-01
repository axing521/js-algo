/***
 * @creater:ACBash
 * @create_time:21-10-25 17:18:32
 * @last_modify:ACBash
 * @modify_time:21-11-1 14:31:25
 * @line_count:22
 **/

/* 跟LC-102很像 */
const zigzagLevelOrder = (root) => {
    if(!root) return [];
    let ans = [], levelNodes = [], queue = [root,null], flag = true;

    while(queue.length){
        const top = queue.shift();

        if(top){
            flag ? levelNodes.push(top.val) : levelNodes.unshift(top.val);
            if(top.left) queue.push(top.left);
            if(top.right) queue.push(top.right);
        }else{
            flag = !flag;
            ans.push(levelNodes);
            levelNodes = [];
            if(queue.length) queue.push(null);
        }
    }

    return ans;
};