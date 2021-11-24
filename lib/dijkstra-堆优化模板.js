/***
 * @creater:ACBash
 * @create_time:21-11-24 21:32:38
 * @last_modify:ACBash
 * @modify_time:21-11-24 22:33:0
 * @line_count:144
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
  
/* 手写堆,针对LC-743，没AC，还是有问题，有时间debug，不过话说都100行代码，实战中算是失败作了 */
const defaultCmp = (a, b) => a > b;
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

class Heap{
    constructor(cmp = defaultCmp){
        this.container = [];
        this.map = new Map();
        this.cmp = cmp;
    }

    insert(node, val){
        this.map.set(val, node);
        const {container, cmp} = this;

        container.push(val);
        let index = container.length - 1;

        while(index){
            let parent = (index - 1) >> 1;  //change

            if(cmp(container[parent], container[index])) return;

            swap(container, index, parent);

            index = parent;
        }
    }

    extract(){
        const {container, cmp} = this;

        if(!container.length) return undefined;

        swap(container, 0, container.length - 1);

        const ansVal = container.pop();
        const ansNode = this.map.get(ansVal);
        const len = container.length;
        let index = 0, betterChild = index * 2 + 1;

        while(betterChild < len){
            let right = index * 2 + 2;

            if(right < len && cmp(container[right], container[betterChild])) betterChild = right;

            if(cmp(container[index], container[betterChild])) break;

            swap(container, index, betterChild);

            index = betterChild;
            betterChild = index * 2 + 1;
        }

        return {
            ansNode,
            ansVal
        };
    }

    top(){
        return this.container[0];
    }

    size(){
        return this.container.length;
    }
}

const dijkstra = (graph, start, end) => {
    const visited = new Set();
    const minHeap = new Heap((a, b) => a < b);

    minHeap.insert(start, 0);

    while(!minHeap.size()){
        const {ansNode, ansVal} = minHeap.extract();
        const curPoint = ansNode;
        const curCost = ansVal;

        if(visited.has(curPoint)) continue;
        visited.add(curPoint);
        if(curPoint == end) return curCost;

        if(!graph[curPoint]) continue;
        for(const [nextPoint, nextCost] of graph[curPoint]){
            if(visited.has(nextPoint)) continue;

            const accumulatedCost = nextCost + curCost;
            minHeap.insert(nextPoint, accumulatedCost);
        }
    }

    return -1;
};

const networkDelayTime = (times, n, k) => {
    let graph = {}, ans = -1;

    for(const [from, to, weight] of times){
        if(!graph[from]) graph[from] = [];
        graph[from].push([to, weight]);
    }

    for(let to = 1; to <= n; to++){
        const dist = dijkstra(graph, k, to);

        if(dist == -1) return -1;
        ans = Math.max(ans, dist);
    }

    return ans;
};