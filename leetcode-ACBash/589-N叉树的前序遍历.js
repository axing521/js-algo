/***
 * @creater:ACBash
 * @create_time:22-1-11 22:21:36
 * @last_modify:ACBash
 * @modify_time:22-1-12 21:34:13
 * @line_count:67
 **/

/* 递归 */
const preorder = (root) => {
    let ans = [];

    const dfs = (node) => {
        if(!node) return;

        ans.push(node.val);

        for(const child of node.children){
            dfs(child);
        }
    };

    dfs(root);

    return ans;
};

/* 迭代双色 */
const preorder = (root) => {
    if(!root) return [];

    const [WHITE, GRAY] = [0, 1];
    let ans = [], stack = [[WHITE, root]];

    while(stack.length){
        const [color, node] = stack.pop();
        
        if(!node) continue;

        if(color == WHITE){
            const len = node.children.length;
            
            for(let i = len - 1; i >= 0; i--){
                stack.push([WHITE, node.children[i]]);
            }

            stack.push([GRAY, node])
        }else{
            ans.push(node.val);
        }
    }

    return ans;
};

/* 迭代不写双色,只有前序可以这样 */
const preorder = (root) => {
    if(!root) return [];

    let ans = [], stack = [root];

    while(stack.length){
        const node = stack.pop();
        
        ans.push(node.val);
        
        const len = node.children.length;

        for(let i = len - 1; i >= 0; i--){
            stack.push(node.children[i]);
        }
    }

    return ans;
};