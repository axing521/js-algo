/***
 * @creater:ACBash
 * @create_time:21-11-28 22:9:29
 * @last_modify:ACBash
 * @modify_time:21-11-28 22:26:58
 * @line_count:18
 **/

/* Bellman-Ford算法模板 */
const BellmanFord = (edges, startNode) => {
    const n = edges.length;
    const minPaths = new Array(n).fill(Infinity);
    minPaths[startNode] = 0;

    for(let i = 0; i < n; i++){
        for(const [u, v, w] of edges){
            minPaths[v] = Math.min(minPaths[v], minPaths[u] + w);
        }
    }

    for(const [u, v, w] of edges){
        if(minPaths[v] > minPaths[u] + w) return -1;
    }   //检测边权值为负成环的情况

    return minPaths;
};