/***
 * @creater:ACBash
 * @create_time:21-11-23 10:56:48
 * @last_modify:ACBash
 * @modify_time:22-5-19 18:6:23
 * @line_count:222
 **/

//times数组记录图中的所有“边”信息 => [u, v, w];
//Dijkstra，三要素：1.graph，2.minPaths，3.visited
const networkDelayTime = (times, n, k) => {
    //初始化邻接矩阵
    const graph = new Array(n).fill(0).map(val => new Array(n).fill(Infinity));
    
    for(const time of times){
        const u = time[0] - 1, v = time[1] - 1;
        graph[u][v] = time[2];
    }

    //初始化minPaths
    let minPaths = new Array(n).fill(Infinity), visited = new Array(n).fill(false);
    minPaths[k - 1] = 0;

    for(let i = 0; i < n; i++){
        let u = -1;

        for(let v = 0; v < n; v++){
            if(!visited[v] && (u == -1 || minPaths[v] < minPaths[u])){
                u = v;
            }
        }

        visited[u] = true;  //找一个确定节点进入

        for(let v = 0; v < n; v++){
            minPaths[v] = Math.min(minPaths[v], minPaths[u] + graph[u][v]);
        }   //由此次的确定节点更新所有minPath
    }

    const ans = Math.max(...minPaths);

    return ans == Infinity ? -1 : ans;
};

/* Dijkstra，graph用邻接表写 */
const networkDelayTime = (times, n, k) => {
    //初始化邻接矩阵
    const graph = new Map();
    
    for(const time of times){
        const u = time[0] - 1, v = time[1] - 1;

        if(!graph.has(u)) graph.set(u, new Map());
        const uAdjList = graph.get(u);

        uAdjList.set(v, time[2]);
    }
    
    //初始化minPaths
    let minPaths = new Array(n).fill(Infinity), visited = new Array(n).fill(false);
    minPaths[k - 1] = 0;

    for(let i = 0; i < n; i++){
        let u = -1;

        for(let v = 0; v < n; v++){
            if(!visited[v] && (u == -1 || minPaths[v] < minPaths[u])){
                u = v;
            }
        }

        visited[u] = true;  //找一个确定节点进入
        
        for(let v = 0; v < n; v++){
            if(graph.get(u) && graph.get(u).get(v) >= 0){
                minPaths[v] = Math.min(minPaths[v], minPaths[u] + graph.get(u).get(v));
            }
        }   //由此次的确定节点更新所有minPath
    }

    const ans = Math.max(...minPaths);

    return ans == Infinity ? -1 : ans;
};

/* 找最近节点的时候可以用最小堆，已完成：22-5-14 */
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
const defaultCmp = (a, b) => a > b;

class Heap{
    constructor(cmp = defaultCmp){
        this.cmp = cmp;
        this.container = [];
    }

    insert(val){
        const {cmp, container} = this;

        container.push(val);

        let index = container.length - 1;
        let parent = (index - 1) >> 1;

        while(index){
            if(cmp(container[parent][1], container[index][1])) break;

            swap(container, index, parent);

            index = parent;

            parent = (index - 1) >> 1;
        }
    }

    extract(){
        if(this.container.length <= 1) return this.container.pop();

        const {cmp, container} = this;

        swap(container, 0, container.length - 1);

        const ans = container.pop(), len = container.length;
        let index = 0, betterChild = index * 2 + 1;

        while(betterChild < len){
            let right = index * 2 + 2;
            
            if(right < len && cmp(container[right][1], container[betterChild][1])) betterChild = right;

            if(cmp(container[index][1], container[betterChild][1])) break;

            swap(container, index, betterChild);

            index = betterChild;

            betterChild = index * 2 + 1;
        }

        return ans;
    }

    top(){
        return this.container[0];
    }

    size(){
        return this.container.length;
    }
}

const networkDelayTime = (times, n, k) => {
    let graph = Array.from({length: n}, () => []);
    let minPaths = new Array(n).fill(Infinity);
    let visited = new Array(n).fill(false);
    minPaths[k - 1] = 0;

    for(const [u, v, w] of times){
        graph[u - 1].push([v - 1, w]);
    }

    let minHeap = new Heap((a, b) => a < b);
    minHeap.insert([k - 1, minPaths[k - 1]]);

    while(minHeap.size()){
        const top = minHeap.extract();

        if(visited[top[0]]) continue;
        visited[top[0]] = true;

        const neighbors = graph[top[0]];

        for(const [next, dist] of neighbors){
            if(minPaths[next] > minPaths[top[0]] + dist){
                minPaths[next] = minPaths[top[0]] + dist;
                minHeap.insert([next, minPaths[next]]);
            }
        }
    }

    return Math.max(...minPaths) == Infinity ? -1 : Math.max(...minPaths)
};

/* 不用堆，枚举 */
const networkDelayTime = (times, n, k) => {
    let graph = Array.from({length: n}, () => []);
    let minPaths = new Array(n).fill(Infinity);
    let visited = new Array(n).fill(false);
    minPaths[k - 1] = 0;

    for(const [u, v, w] of times){
        graph[u - 1].push([v - 1, w]);
    }

    const bestV = (visited, minPaths) => {
        let min = Infinity, minIndex = k - 1;
        
        for(let v = 0; v < n; v++){
            if(!visited[v] && minPaths[v] < min){
                min = minPaths[v];
                minIndex = v;
            }
        }

        return minIndex;
    }

    for(let i = 0; i < n; i++){
        const u = bestV(visited, minPaths);

        visited[u] = true;

        const neighbors = graph[u];

        for(const [next, dist] of neighbors){
            if(!visited[next] && minPaths[next] > minPaths[u] + dist){
                minPaths[next] = minPaths[u] + dist;
            }
        }
    }

    return Math.max(...minPaths) == Infinity ? -1 : Math.max(...minPaths)
};

/* 还有BFS的 */

/* floyd */

/* bellman */

/* SPFA */