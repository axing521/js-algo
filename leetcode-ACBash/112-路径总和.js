/***
 * @creater:ACBash
 * @create_time:22-9-19 20:58:33
 * @last_modify:ACBash
 * @modify_time:22-9-19 21:6:55
 * @line_count:29
 **/

const hasPathSum = (root, targetSum) => {
    if(!root) return [];

    let ans = false;

    const backtrack = (track, node, sum) => {
        if(!node.left && !node.right && sum == targetSum) return ans = true;

        if(node.left){
            track.push(node.left.val);
            sum += node.left.val;
            backtrack(track, node.left, sum);
            track.pop();
            sum -= node.left.val;
        }

        if(node.right){
            track.push(node.right.val);
            sum += node.right.val;
            backtrack(track, node.right, sum);
            track.pop();
            sum -= node.right.val;
        }
    };

    backtrack([root.val], root, root.val);

    return ans;
};