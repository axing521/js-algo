/***
 * @creater:ACBash
 * @create_time:22-1-24 18:47:9
 * @last_modify:ACBash
 * @modify_time:22-1-25 17:59:14
 * @line_count:32
 **/

/* 双递归，回溯，dfs */
const pathSum = (root, sum) => {
    let ans = 0;

    const backtrack = (node, trackSum) => {
        if(trackSum == sum) ans++;
        if(!node.left && !node.right) return;

        if(node.left){
            trackSum += node.left.val;
            backtrack(node.left, trackSum);
            trackSum -= node.left.val;
        }
        if(node.right){
            trackSum += node.right.val;
            backtrack(node.right, trackSum);
            trackSum -= node.right.val;
        }
    };

    const dfs = (node) => {
        if(!node) return;
        
        backtrack(node, node.val);
        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);

    return ans;
};