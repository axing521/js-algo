/***
 * @creater:ACBash
 * @create_time:22-3-1 17:34:19
 * @last_modify:ACBash
 * @modify_time:22-3-2 12:28:6
 * @line_count:18
 **/

 const flipMatchVoyage = (root, voyage) => {
    let ans = [], i = 0;
    
    const dfs = (node) => {
        if(!node) return true;

        if(node.val != voyage[i++]) return false;

        if(node.left && node.left.val != voyage[i]){
            ans.push(node.val);
            return dfs(node.right) && dfs(node.left);
        }

        return dfs(node.left) && dfs(node.right);
    };

    return dfs(root) ? ans : [-1];
};