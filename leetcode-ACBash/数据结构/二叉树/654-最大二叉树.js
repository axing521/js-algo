/***
 * @creater:ACBash
 * @create_time:22-1-17 17:54:41
 * @last_modify:ACBash
 * @modify_time:22-1-18 19:24:58
 * @line_count:25
 **/

/* 自己写的DFS */
const constructMaximumBinaryTree = (nums) => {
    const findMax = (nums) => {
        const len = nums.length;
        const max = Math.max(...nums);

        for(let i = 0; i < len; i++){
            if(nums[i] == max) return [i, max];
        }
    };

    const dfs = (nums) => {
        if(!nums.length) return null; 

        const [i, max] = findMax(nums);
        let root = new TreeNode(max);

        root.left = dfs(nums.slice(0, i));
        root.right = dfs(nums.slice(i + 1));

        return root;
    };

    return dfs(nums);
};