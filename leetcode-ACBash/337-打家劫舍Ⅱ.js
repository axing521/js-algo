/***
 * @creater:ACBash
 * @create_time:22-10-3 0:6:38
 * @last_modify:ACBash
 * @modify_time:22-10-3 0:40:0
 * @line_count:20
 **/

//树结构的198问题，递归解决
const rob = (root) => {
    const recursive = (node) => {
        if(!node) return [0, 0];

        let cursive = [0, 0];

        const left = recursive(node.left);
        const right = recursive(node.right);

        cursive[0] = left[1] + right[1] + node.val;
        cursive[1] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

        return cursive;
    };
    
    const [robed, notRobed] = recursive(root);

    return Math.max(robed, notRobed);
};