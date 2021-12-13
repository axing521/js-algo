/***
 * @creater:ACBash
 * @create_time:21-12-13 11:8:42
 * @last_modify:ACBash
 * @modify_time:21-12-13 15:36:21
 * @line_count:36
 **/

/* 分而治之，同105，106 */
const constructFromPrePost = (preorder, postorder) => {
    if(!preorder.length) return null;

    let root = new TreeNode(preorder[0]);
    if(preorder.length == 1) return root;
    
    const i = postorder.indexOf(preorder[1]);

    root.left = constructFromPrePost(preorder.slice(1, i + 2), postorder.slice(0, i + 1));
    root.right = constructFromPrePost(preorder.slice(i + 2), postorder.slice(i + 1, -1));

    return root;
};

/* 节省空间的变体 */
const constructFromPrePost = (preorder, postorder) => {
    const build = (i, j, len) => {
        if(len == 0) return null;

        let root = new TreeNode(preorder[i]);
        if(len == 1) return root;

        let k = 1;
        for(; k < len; k++){
            if(postorder[j + k - 1] == preorder[i + 1]) break;
        }

        root.left = build(i + 1, j, k);
        root.right = build(i + k + 1, j + k, len - k - 1);

        return root;
    };

    return build(0, 0, preorder.length);
};