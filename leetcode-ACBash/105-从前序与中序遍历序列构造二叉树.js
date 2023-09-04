/***
 * @creater:ACBash
 * @create_time:21-12-9 17:41:10
 * @last_modify:ACBash
 * @modify_time:21-12-13 10:46:28
 * @line_count:35
 **/

/* 先序遍历用来找根节点，根节点作为stop，遍历中序遍历的节点加入左右子树 */
/* 注意看if里面的代码，是将先序遍历和中序遍历融合在一起 */
const buildTree = (preorder, inorder) => {
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
    }

    return build();
};

/* 分而治之，归并的感觉，好理解，但是用到API，时间空间复杂度会提高 */
const buildTree = (preorder, inorder) => {
    if(!inorder.length) return null;

    let root = new TreeNode(preorder[0]);

    const i = inorder.indexOf(root.val);

    root.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
    root.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));

    return root;
};