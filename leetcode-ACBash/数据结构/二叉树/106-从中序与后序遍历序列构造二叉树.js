/***
 * @creater:ACBash
 * @create_time:21-12-12 21:59:51
 * @last_modify:ACBash
 * @modify_time:21-12-13 11:8:45
 * @line_count:34
 **/

/* 参考LC-105，后序遍历从尾指针找根节点，所以是根右左，右根左 */
const buildTree = (inorder, postorder) => {
    let post = postorder.length - 1, i = inorder.length - 1;

    const build = (stop) => {
        if(inorder[i] != stop){
            let root = new TreeNode(postorder[post--]);
            
            root.right = build(root.val);
            i--;
            root.left = build(stop);

            return root;
        }

        return null;
    };

    return build();
};

/* 分而治之，归并的感觉，好理解，但是用到API，时间空间复杂度会提高 */
const buildTree = (inorder, postorder) => {
    if(!inorder.length) return null;

    let root = new TreeNode(postorder[postorder.length - 1]);

    const i = inorder.indexOf(root.val);

    root.right = buildTree(inorder.slice(i + 1), postorder.slice(i, postorder.length - 1));
    root.left = buildTree(inorder.slice(0, i), postorder.slice(0, i));

    return root;
};