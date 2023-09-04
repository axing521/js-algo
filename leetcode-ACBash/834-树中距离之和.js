/***
 * @creater:ACBash
 * @create_time:22-1-13 13:42:14
 * @last_modify:ACBash
 * @modify_time:22-1-24 18:47:5
 * @line_count:149
 **/

/* 树形DP，懵逼 */
const sumOfDistancesInTree = (n, edges) => {
    let ans = new Array(n).fill(0);
    let sz = new Array(n).fill(0);
    let dp = new Array(n).fill(0);
    let graph = Array.from({length: n}, () => []);

    for(const [u, v] of edges){
        graph[u].push(v);
        graph[v].push(u);
    }

    const dfs = (u, f) => {
        sz[u] = 1;
        dp[u] = 0;

        for(const v of graph[u]){
            if(v == f) continue;    //邻居是来的时候的路

            dfs(v, u);
            dp[u] += dp[v] + sz[v];
            sz[u] += sz[v];
        }
    };

    const dfs2 = (u, f) => {
        ans[u] = dp[u];

        for(const v of graph[u]){
            if(v == f) continue;

            const pu = dp[u], pv = dp[v];
            const su = sz[u], sv = sz[v];

            dp[u] -= dp[v] + sz[v];
            sz[u] -= sz[v];
            dp[v] += dp[u] + sz[u];
            sz[v] += sz[u];

            dfs2(v, u);

            dp[u] = pu, dp[v] = pv;
            sz[u] = su, sz[v] = sv;
        }
    };

    dfs(0, -1);
    dfs2(0, -1);

    return ans;
};

/* 笨猪做法 */

//  https://leetcode-cn.com/problems/sum-of-distances-in-tree/description/
// 参考 https://leetcode-cn.com/problems/sum-of-distances-in-tree/solution/shou-hua-tu-jie-shu-zhong-ju-chi-zhi-he-shu-xing-d/


/**
 * @param {number} N 是边数，也是节点数
 * @param {number[][]} edges 边的连接
 * @return {number[]}
 * 
 * @踩的坑
 * 1. 用 fill([]) 的形式给每一个节点 i 注入邻居数组，但是由于数组是对象及 js 的特性，他们是同一个数组
 * 2. 
 */
var sumOfDistancesInTree = function (N, edges) {

    // 设置邻居关系表 -- 即节点关联了哪些节点
    const graph = new Array(N)
    for(let i = 0;i<N;i++){
        graph[i] = []
    }
    for(const edge of edges){
        const [from,to] = edge
        graph[from].push(to)
        graph[to].push(from)
    }
    
    // 使用后序遍历，自低向上求出子树中距离之和 distSum 和节点之和 nodeNum
    const distSum = new Array(N).fill(0)
    // 最少有 1 个节点，就是自身
    const nodeNum = new Array(N).fill(1)
    const postOrder = (root,father) => {
        const neighbors = graph[root]
        for(let neighbor of neighbors){
            if(father === neighbor) continue  // 父节点则跳过
            postOrder(neighbor,root) // 先递归到底部
            nodeNum[root] += nodeNum[neighbor]
            distSum[root] += distSum[neighbor]+nodeNum[neighbor]    //妙啊
        }
    }

    // 根据已经求得的子树中的距离和 distSum 数组，自顶向下求完整的 distSum
    const preOrder = (root,father) => {
        const neighbors = graph[root]
        for(let neighbor of neighbors){
            if(father === neighbor) continue  // 父节点则跳过,保证是根节点向叶子节点走
            // 每个子树节点都少走了一步，所以减去 nodeNum[neighbor]
            // 每个其他的子树都要多走一步（因为本来走到 root，现在要再走到 neighter）,所以要加上 N-nodeNum[neighbor]
            distSum[neighbor] = distSum[root]-nodeNum[neighbor]+N-nodeNum[neighbor] //?
            // 求到了顶部的值之后，再往下走
            preOrder(neighbor,root)
        }
    }
    postOrder(0,-1)
    preOrder(0,-1)
    return distSum
};

/* 无注释 */
const sumOfDistancesInTree = (n, edges) => {
    let graph = Array.from({length: n}, () => []);

    for(const [u, v] of edges){
        graph[u].push(v);
        graph[v].push(u);
    }

    let distSum = Array.from({length: n}, () => 0);
    let nodeSum = Array.from({length: n}, () => 1);

    const postorder = (node, parent) => {
        const neighbors = graph[node];

        for(const neighbor of neighbors){
            if(neighbor == parent) continue;
            postorder(neighbor, node);
            nodeSum[node] += nodeSum[neighbor];
            distSum[node] += distSum[neighbor] + nodeSum[neighbor];
        }
    };

    const preorder = (node, parent) => {
        const neighbors = graph[node];
        
        for(const neighbor of neighbors){
            if(neighbor == parent) continue;
            distSum[neighbor] = distSum[node] - nodeSum[neighbor] + n - nodeSum[neighbor];
            preorder(neighbor, node);
        }
    };

    postorder(0, -1);
    preorder(0, -1);

    return distSum;
};