/***
 * @creater:ACBash
 * @create_time:21-11-24 22:33:36
 * @last_modify:ACBash
 * @modify_time:22-1-7 9:4:33
 * @line_count:114
 **/

/* Dijkstra堆优化，问题本质：对每条边，ans += Min(w, max(M - minPaths[u], 0) + max(M - minPaths[v], 0)),另外，minPaths[i] <= M的时候ans++ */
/* if(!graph[u]) graph[u] = [];
        graph[u].push({
            "next": v,
            "dist": dist + 1
        })
        if(!graph[v]) graph[v] = [];
        graph[v].push({
            "next": u,
            "dist": dist + 1
        }) */
const defaultCmp = (a, b) => a > b;
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
        
class Heap{
    constructor(cmp = defaultCmp){
        this.container = [];
        this.cmp = cmp;
    }

    insert(val){
        const {container, cmp} = this;

        container.push(val);

        let index = container.length - 1;

        while(index){
            let parent = (index - 1) >> 1;

            if(cmp(container[parent][1], container[index][1])) return;

            swap(container, index, parent);

            index = parent;
        }
    }

    extract(){
        const {container, cmp} = this;

        if(!container.length) return undefined;

        swap(container, 0, container.length - 1);

        const ans = container.pop();
        const len = container.length;
        let index = 0, betterChild = index * 2 + 1;

        while(betterChild < len){
            const right = index * 2 + 2;

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

const reachableNodes = (edges, maxMoves, n) => {
    let ans = 0, graph = new Array(n).fill(0).map(() => []), visited = new Array(n).fill(false);    //Array.from(new Array(N), ()=> [])这个要快一点
    let heap = new Heap((a, b) => a < b), minPaths = new Array(n).fill(Infinity);

    for(const [u, v, w] of edges){
        graph[u].push([v, w + 1]);
        graph[v].push([u, w + 1]);
    }

    minPaths[0] = 0;
    heap.insert([0, minPaths[0]]);

    while(heap.size()){
        let top = heap.extract();

        if(visited[top[0]]) continue;
        visited[top[0]] = true;
        
        if(minPaths[top[0]] <= maxMoves) ans++;

        for(const [next, dist] of graph[top[0]]){
            if(minPaths[next] > minPaths[top[0]] + dist){
                minPaths[next] = minPaths[top[0]] + dist;
                heap.insert([next, minPaths[next]]);
            }
        }
    }
    
    for(let i = 0; i < edges.length; i++){
        const u = edges[i][0], v = edges[i][1], w = edges[i][2];
        let a = Math.max(maxMoves - minPaths[u], 0);
        let b = Math.max(maxMoves - minPaths[v], 0);

        ans += Math.min(w, a + b);
    }

    return ans;
};

console.log(reachableNodes([[0, 1, 10], [0, 2, 1], [1, 2, 2]], 6, 3));