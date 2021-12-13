/***
 * @creater:ACBash
 * @create_time:21-12-13 15:36:19
 * @last_modify:ACBash
 * @modify_time:21-12-13 16:5:24
 * @line_count:44
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