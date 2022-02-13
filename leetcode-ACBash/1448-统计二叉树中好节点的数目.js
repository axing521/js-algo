/***
 * @creater:ACBash
 * @create_time:22-2-13 14:58:4
 * @last_modify:ACBash
 * @modify_time:22-2-13 15:25:40
 * @line_count:48
 **/

/* 回溯 */
const goodNodes = (root) => {
    let track = [root.val], ans = 1;

    const backtrack = (node) => {
        if(!node.left && !node.right){
            return;
        }

        if(node.left){
            if(node.left.val >= Math.max(...track)) ans++;
            track.push(node.left.val);
            backtrack(node.left);
            track.pop();
        }

        if(node.right){
            if(node.right.val >= Math.max(...track)) ans++;
            track.push(node.right.val);
            backtrack(node.right);
            track.pop();
        }
    };

    backtrack(root);

    return ans;
};

/* 参数扩展 + 前序遍历 */
const goodNodes = (root) => {
    let ans = 0;

    const dfs = (node, max) => {
        if(!node) return;

        if(node.val >= max){
            ans++;
            max = node.val;
        }
        dfs(node.left, max);
        dfs(node.right, max);
    };

    dfs(root, -Infinity);

    return ans;
};