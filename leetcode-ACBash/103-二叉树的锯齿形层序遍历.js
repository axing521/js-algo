/***
 * @creater:ACBash
 * @create_time:21-10-25 17:18:32
 * @last_modify:ACBash
 * @modify_time:22-11-25 10:52:23
 * @line_count:51
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

//正常层序遍历，不过要用一个flag布尔值，在每层结束的时候看是否要翻转levelNode，并翻转flag值
const zigzagLevelOrder = (root) => {
    if(!root) return [];

    let queue = [root];
    let direction = true;   //true表示往右
    let ans = [];

    while(queue.length){
        const len = queue.length;
        let levelNodes = [];

        for(let i = 0; i < len; i++){
            const node = queue.shift();    
            levelNodes.push(node.val)

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }

        if(direction != true) levelNodes.reverse();
        direction = !direction;

        ans.push(levelNodes);
    }

    return ans;
};