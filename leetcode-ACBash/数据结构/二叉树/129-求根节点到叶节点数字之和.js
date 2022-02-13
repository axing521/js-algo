/***
 * @creater:ACBash
 * @create_time:22-1-25 20:50:40
 * @last_modify:ACBash
 * @modify_time:22-2-13 14:58:6
 * @line_count:29
 **/

/* 回溯 */
const sumNumbers = (root) => {
    if(!root || (!root.left && !root.right)) return root.val;

    let track = root.val, sum = 0;

    const backtrack = (node) => {
        if(!node.left && !node.right){
            sum += track;
            return;
        }

        if(node.left){
            track = track * 10 + node.left.val;
            backtrack(node.left);
            track = (track / 10) | 0;   //除10取整
        }

        if(node.right){
            track = track * 10 + node.right.val;
            backtrack(node.right);
            track = (track / 10) | 0;   //除10取整
        }
    };

    backtrack(root);

    return sum;
};