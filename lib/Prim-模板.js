/***
 * @creater:ACBash
 * @create_time:22-5-16 16:23:18
 * @last_modify:ACBash
 * @modify_time:22-5-19 12:20:11
 * @line_count:165
 **/

/* 以LC-1584为例，但这个例子的图是稠密图，即所有节点都可以互连，如果图是死的应该怎么处理？ */
const minCostConnectPoints = (points) => {
    const n = points.length;    //节点个数
    let visited = new Array(n).fill(false);     //区分 已选节点集合 和 未选节点集合
    let minEdge = new Array(n).fill(Infinity);      //表示 到达节点 为 索引节点 的 最小边权值
    let pred = new Array(n).fill(-1);       //表示 到达节点 为 索引节点 的 最小边 的前溯点
    minEdge[0] = 0;     //初始化一个起始顶点

    //针对于 LC-1584 的 曼哈顿距离 边权值 计算
    const compute_weight = ([x0, y0], [x1, y1]) => Math.abs(x0 - x1) + Math.abs(y0 - y1);

    //minIndex 封装 枚举取极值过程，便于 加点法 中的 加点
    //输入 是 已选未选节点集合，用 visited 描述，以及渐进生成树的边，用minEdge描述
    const bestV = (visited, minEdge) => {
        let min = Infinity, minIndex = 0;      //不可达的 渐进生成树的 起始顶点
        
        for(let v = 0; v < n; v++){
            if(!visited[v] && minEdge[v] < min){
                min = minEdge[v];
                minIndex = v;
            }
        }

        return minIndex;
    };

    //加点法
    for(let i = 0; i < n; i++){
        //在 未选节点集合中 选出一个 minEdge 最小边权值 最小的 ，将其索引节点 加入 已选节点集合
        //类似 这种 动态取极值的 场景，是否可以用 堆 来处理 呢？ 下面是 枚举 找出 极值节点
        //bestV 封装 枚举取极值过程
        const u = bestV(visited, minEdge);

        visited[u] = true;  //加入 已选节点集合

        //根据这个 新人节点 来更新 minEdge, 针对于 未选节点集合的 可达边
        //这个例子的图是稠密图，即所有节点都可以互连，如果图是死的应该怎么处理？这里我们用 枚举
        for(let v = 0; v < n; v++){
            const weightUV = compute_weight(points[u], points[v]);  //计算u，v节点的权值

            if(!visited[v] && minEdge[v] > weightUV){
                minEdge[v] = weightUV;
                pred[v] = u;
            }
        }
    }

    //完成，最小生成树可用 minEdge 和 pred 来描述
    
    //返回 最小生成树的 加权和
    return minEdge.reduce((prev, cur) => prev + cur, 0);
};

/* 堆优化 */
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

const minCostConnectPoints = (points) => {
    const n = points.length;    //节点个数
    let visited = new Array(n).fill(false);     //区分 已选节点集合 和 未选节点集合
    let minEdge = new Array(n).fill(Infinity);      //表示 到达节点 为 索引节点 的 最小边权值
    let pred = new Array(n).fill(-1);       //表示 到达节点 为 索引节点 的 最小边 的前溯点
    let ans = 0;    //也可以用ans
    minEdge[0] = 0;     //初始化一个起始顶点

    //初始化最小堆，加入起始顶点，minHeap 封装 取极值过程，便于 加点法 中的 加点
    let minHeap = new Heap((a, b) => a < b);
    minHeap.insert([0, minEdge[0]]);

    //针对于 LC-1584 的 曼哈顿距离 边权值 计算
    const compute_weight = ([x0, y0], [x1, y1]) => Math.abs(x0 - x1) + Math.abs(y0 - y1);

    //加点法，循环条件是 minHeap还有值 且 visited 还有 未访问的 顶点
    while(minHeap.size() && visited.includes(false)){
        //在 未选节点集合中 选出一个 minEdge 最小边权值 最小的 ，将其索引节点 加入 已选节点集合
        //取极值过程 用 minHeap
        const [u, edgeToU] = minHeap.extract();

        if(visited[u]) continue;
        visited[u] = true;  //加入 已选节点集合
        
        ans += edgeToU;

        //根据这个 新人节点 来更新 minEdge, 针对于 未选节点集合的 可达边
        //这个例子的图是稠密图，即所有节点都可以互连，如果图是死的应该怎么处理？这里我们用 枚举
        
        for(let v = 0; v < n; v++){
            if(visited[v]) continue;    //针对于 未选节点集合的 可达边 的更新

            const weightUV = compute_weight(points[u], points[v]);  //计算u，v节点的权值

            if(weightUV < minEdge[v]){
                minEdge[v] = weightUV;
                pred[v] = u;
                minHeap.insert([v, minEdge[v]]);
            }
        }
    }
    
    //完成，最小生成树可用 minEdge 和 pred 来描述
    
    //返回 最小生成树的 加权和, 可以直接返回 ans 或 minEdge.reduce((prev, cur) => prev + cur, 0)
    return ans;
};