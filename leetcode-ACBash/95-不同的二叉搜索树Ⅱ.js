/***
 * @creater:ACBash
 * @create_time:22-10-5 1:19:33
 * @last_modify:ACBash
 * @modify_time:22-10-5 1:39:52
 * @line_count:30
 **/

//分而治之，后续递归
const generateTrees = (n) => {
    const merge = (leftTrees, rightTrees, rootVal, rootTrees) => {
        for(const leftTree of leftTrees){
            for(const rightTree of rightTrees){
                const root = new TreeNode(rootVal);
                root.left = leftTree;
                root.right = rightTree;
                rootTrees.push(root);
            }
        }
    };

    const recursive = (start, end) => {
        let ans = [];

        if(start > end) return [null];

        for(let i = start; i <= end; i++){
            const leftTrees = recursive(start, i - 1);
            const rightTrees = recursive(i + 1, end);

            merge(leftTrees, rightTrees, i, ans);
        }
        
        return ans;
    };

    return recursive(1, n);
};