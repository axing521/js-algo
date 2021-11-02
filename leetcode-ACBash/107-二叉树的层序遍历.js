/***
 * @creater:ACBash
 * @create_time:21-11-1 17:2:48
 * @last_modify:ACBash
 * @modify_time:21-11-2 15:35:20
 * @line_count:39
 **/

/* 与102-层序遍历有点联系，可以伪倒层序遍历 */
const levelOrderBottom = (root) => {
    if(!root) return [];
    let ans = [], queue = [root, null], levelNodes = [];

    while(queue.length){
        const top = queue.shift();

        if(top){
            levelNodes.push(top.val);
            if(top.left) queue.push(top.left);
            if(top.right) queue.push(top.right);
        }else{
            ans.unshift(levelNodes);
            levelNodes = [];
            if(queue.length) queue.push(null);
        }
    }

    return ans;
};

/* 二维数组|递归 */
const levelOrderBottom = (root) => {
    let ans = [];

    const level = (node, depth) => {
        if(!node) return;
        if(!ans[depth]) ans[depth] = [];
        ans[depth].push(node.val);

        level(node.left, depth + 1);
        level(node.right, depth + 1);
    };

    level(root, 0);

    return ans.reverse();
};