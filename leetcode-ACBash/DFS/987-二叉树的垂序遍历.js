/***
 * @creater:ACBash
 * @create_time:22-3-2 12:28:4
 * @last_modify:ACBash
 * @modify_time:22-3-3 12:21:53
 * @line_count:33
 **/

 const verticalTraversal = (root) => {
    let nodes = [];

    const dfs = (node, row, col) => {
        if(!node) return;;

        nodes.push([row, col, node.val]);
        dfs(node.left, row + 1, col - 1);
        dfs(node.right, row + 1, col + 1);
    };

    dfs(root, 0, 0);

    nodes.sort((tuple1, tuple2) => {
        if(tuple1[1] != tuple2[1]){
            return tuple1[1] - tuple2[1];
        }else if(tuple1[0] != tuple2[0]){
            return tuple1[0] - tuple2[0];
        }else{
            return tuple1[2] - tuple2[2];
        }
    });

    const left = nodes[0][1];
    let ans = [];

    nodes.forEach(node => {
        if(!ans[node[1] - left]) ans[node[1] - left] = [];
        ans[node[1] - left].push(node[2]);
    })

    return ans;
};