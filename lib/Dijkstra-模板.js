/***
 * @creater:ACBash
 * @create_time:21-11-24 21:32:38
 * @last_modify:ACBash
 * @modify_time:22-5-19 18:39:7
 * @line_count:168
 **/

/* LC内置API调用版本 */
const dijkstra = (graph, start, end) => {
    const visited = new Set()
    const minHeap = new MinPriorityQueue();
    //注：此处new MinPriorityQueue()用了LC的内置API，它的enqueue由两个部分组成：
    //element 和 priority。
    //堆会按照priority排序，可以用element记录一些内容。
    minHeap.enqueue(start, 0)

    while(!minHeap.isEmpty()){
      const {element, priority} = minHeap.dequeue();
      //下面这两个变量不是必须的，只是便于理解
      const curPoint = element;
      const curCost = priority;
  
      if(curPoint === end) return curCost;
      if(visited.has(curPoint)) continue;
      visited.add(curPoint);
  
      if(!graph[curPoint]) continue;
      for(const [nextPoint, nextCost] of graph[curPoint]){
        if(visited.has(nextPoint)) continue;
        //注意heap里面的一定是从startPoint到某个点的距离；
        //curPoint到nextPoint的距离是nextCost；但curPoint不一定是startPoint。
        const accumulatedCost = nextCost + curCost;
        minHeap.enqueue(nextPoint, accumulatedCost);
      }
    }
    return -1
}
  
/* 手写堆 */
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

    while(minHeap.size() && visited.includes(false)){
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