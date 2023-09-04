/***
 * @creater:ACBash
 * @create_time:21-12-13 15:36:19
 * @last_modify:ACBash
 * @modify_time:22-1-19 17:53:3
 * @line_count:72
 **/

/* 思路参考LC-105 */
const bstFromPreorder = (preorder) => {
    let inorder = Array.from(preorder);
    inorder.sort((a, b) => a - b);

    let pre = i = 0;

    const build = (stop) => {
        if(inorder[i] != stop){
            let root = new TreeNode(preorder[pre++]);

            root.left = build(root.val);
            i++;
            root.right = build(stop);

            return root;
        }

        return null;
    };

    return build();
};

/* 分而治之 */
const bstFromPreorder = (preorder) => {
    let inorder = Array.from(preorder);
    inorder.sort((a, b) => a - b);

    const build = (preorder, inorder) => {
        if(!inorder.length) return null;
        
        let root = new TreeNode(preorder[0]);

        const i = inorder.indexOf(root.val);

        root.left = build(preorder.slice(1, i + 1), inorder.slice(0, i));
        root.right = build(preorder.slice(i + 1), inorder.slice(i + 1));

        return root;
    };

    return build(preorder, inorder);
};

/* DFS，分而治之 */
const bstFromPreorder = (preorder) => {
    const sonPreorder = (preorder, cmp) => {
        let ans = [], rootVal = preorder[0];

        for(let i = 1; i < preorder.length; i++){
            if(cmp(preorder[i], rootVal)) ans.push(preorder[i]);
        }

        return ans;
    };
    
    const dfs = (preorder) => {
        if(!preorder.length) return null;

        const left = sonPreorder(preorder, (a, b) => a < b);
        const right = sonPreorder(preorder, (a, b) => a > b);
        let root = new TreeNode(preorder[0]); 

        root.left = dfs(left);
        root.right = dfs(right);

        return root;
    };

    return dfs(preorder);
};