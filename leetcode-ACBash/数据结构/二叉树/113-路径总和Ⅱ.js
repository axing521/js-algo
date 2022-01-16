/***
 * @creater:ACBash
 * @create_time:22-1-14 15:24:34
 * @last_modify:ACBash
 * @modify_time:22-1-16 22:56:54
 * @line_count:34
 **/

/* 本题和剑指34题是同一题 */
/* 回溯,DFS */
const pathSum = (root, target) => {
    if(!root) return [];

    let ans = [], path = [root.val], sum = root.val;

    const dfs = (node) => {
        if(!node.left && !node.right){
            if(sum == target) ans.push([...path]);
            return;
        }

        if(node.left){
            path.push(node.left.val);
            sum += node.left.val;
            dfs(node.left);
            path.pop();
            sum -= node.left.val;
        }

        if(node.right){
            path.push(node.right.val);
            sum += node.right.val;
            dfs(node.right);
            path.pop();
            sum -= node.right.val;
        }
    };

    dfs(root);

    return ans;
};