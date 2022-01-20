/***
 * @creater:ACBash
 * @create_time:22-1-20 14:32:8
 * @last_modify:ACBash
 * @modify_time:22-1-20 15:53:31
 * @line_count:71
 **/

/* 和LC-450有点像,DFS,后序遍历 */
const trimBST = (root, low, high) => {
    const dfs = (node) => {
        if(!node) return null;

        node.left = dfs(node.left);
        node.right = dfs(node.right);

        if(node.val < low || node.val > high){
            if(!node.left) return node.right;
            if(!node.right) return node.left;

            let pred = node.right;
            while(pred.left) pred = pred.left;
            pred.left = node.left;

            return node.right;
        }

        return node;
    };

    return dfs(root);
};

/* 双色标记法迭代实现 */
const trimBST = (root, low, high) => {
    const [WHITE, GRAY] = [0, 1];
    let stack = [[root, WHITE]];

    let dummy = new TreeNode(-1);
    dummy["next"] = root;
    root.parent = [dummy, "next"];

    while(stack.length){
        const [node, color] = stack.pop();

        if(color == WHITE){
            stack.push([node, GRAY]);
            if(node.right){
                stack.push([node.right, WHITE]);
                node.right.parent = [node, "right"];
            }
            if(node.left){
                stack.push([node.left, WHITE]);
                node.left.parent = [node, "left"];
            }
            
        }else{
            if(node.val < low || node.val > high){
                const [parent, dir] = node.parent;
                
                if(!node.left){
                    parent[dir] = node.right;
                    continue;
                } 
                if(!node.right){
                    parent[dir] = node.left;
                    continue;
                } 
                
                let pred = node.right;
                while(pred.left) pred = pred.left;
                pred.left = node.left;
                parent[dir] = node.right;
            }
        }
    }

    return dummy["next"];
};