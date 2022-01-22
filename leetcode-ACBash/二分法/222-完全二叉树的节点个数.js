/***
 * @creater:ACBash
 * @create_time:22-1-22 16:37:26
 * @last_modify:ACBash
 * @modify_time:22-1-22 19:5:47
 * @line_count:53
 **/

/* 二分查找 + 位运算 */
const countNodes = (root) => {
    if(!root) return 0;
    let level = 0, node = root;

    while(node.left){
        level++;
        node = node.left;
    }

    const exists = (num) => {
        let bits = 1 << level - 1, node = root;

        while(node && bits > 0){
            if(bits & num) node = node.right;
            else node = node.left;
            bits >>= 1;
        }

        return node != null;
    };
    let low = 1 << level, high = (1 << level + 1) - 1;

    while(low < high){
        const mid = low + (high - low + 1 >> 1);

        if(exists(mid)) low = mid;
        else high = mid - 1;
    }

    return low;
};

/* 还有一种递归的解法也很妙，左右子树肯定也是完全二叉树 */
const countNodes = (root) => {
    if(!root) return 0;
    
    let leftHeight = 0, rightHeight = 0;
    let node = root;

    while(node.left){
        leftHeight++;
        node = node.left;
    }
    while(node.right){
        rightHeight++;
        node = node.right;
    }

    if(leftHeight == rightHeight) return 2 ** (leftHeight + 1) - 1;

    return 1 + countNodes(root.left) + countNodes(root.right);
};