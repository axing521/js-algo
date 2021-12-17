/***
 * @creater:ACBash
 * @create_time:21-12-16 19:8:21
 * @last_modify:ACBash
 * @modify_time:21-12-17 15:8:30
 * @line_count:278
 **/

/* 纯暴力，O(n^4),肯定过不了，优化一点 */
/* 空间换时间，记忆化，前缀和的思想，O(n^2),得到coord，找kth，需要O(n^3) */
/* 560ms, 121MB,时间是O(n^2) + O(n^2logn^2),空间是O(n^2 + n) */
const kthLargestValue = (matrix, k) => {
    const m = matrix.length, n = matrix[0].length;
    let coord = [], preLayer = new Array(n).fill(0), pre = new Array(n).fill(0);    //pre其实一个单变量也行

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(j == 0) pre[j] = matrix[i][j];
            else pre[j] = pre[j - 1] ^ matrix[i][j];

            preLayer[j] = preLayer[j] ^ pre[j];

            coord.push(preLayer[j]);
        }
    }

    coord.sort((a, b) => b - a);

    return coord[k - 1];
};

/* 用堆 */
/* 400ms, 80MB */
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

            if(cmp(container[parent], container[index])) break;

            swap(container, index, parent);

            index = parent;
        }
    }

    extract(){
        if(!this.size()) return null;
        if(this.size() == 1) return this.container.pop();
        
        const {container, cmp} = this;

        swap(container, 0, container.length - 1);

        const ans = container.pop(), len = container.length;
        let index = 0, betterChild = index * 2 + 1;

        while(betterChild < len){
            let right = index * 2 + 2;

            if(right < len && cmp(container[right], container[betterChild])) betterChild = right;

            if(cmp(container[index], container[betterChild])) break;

            swap(container, index, betterChild);

            index = betterChild;
            betterChild = index * 2 + 1;
        }

        return ans;
    }

    top(){
        if(!this.size()) return null;
        return this.container[0];
    }

    size(){
        return this.container.length;
    }
}

const kthLargestValue = (matrix, k) => {
    const m = matrix.length, n = matrix[0].length;
    let maxHeap = new Heap(), preLayer = new Array(n).fill(0), pre = new Array(n).fill(0);
    let ans = -1;

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(j == 0) pre[j] = matrix[i][j];
            else pre[j] = pre[j - 1] ^ matrix[i][j];

            preLayer[j] = preLayer[j] ^ pre[j];

            maxHeap.insert(preLayer[j]);
        }
    }

    while(k--){
        ans = maxHeap.extract();
    }

    return ans;
};

/* 固定堆 */
/* 450ms, 69MB */
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

            if(cmp(container[parent], container[index])) break;

            swap(container, index, parent);

            index = parent;
        }
    }

    extract(){
        if(!this.size()) return null;
        if(this.size() == 1) return this.container.pop();
        
        const {container, cmp} = this;

        swap(container, 0, container.length - 1);

        const ans = container.pop(), len = container.length;
        let index = 0, betterChild = index * 2 + 1;

        while(betterChild < len){
            let right = index * 2 + 2;

            if(right < len && cmp(container[right], container[betterChild])) betterChild = right;

            if(cmp(container[index], container[betterChild])) break;

            swap(container, index, betterChild);

            index = betterChild;
            betterChild = index * 2 + 1;
        }

        return ans;
    }

    top(){
        if(!this.size()) return null;
        return this.container[0];
    }

    size(){
        return this.container.length;
    }
}

const kthLargestValue = (matrix, k) => {
    const m = matrix.length, n = matrix[0].length;
    let minHeap = new Heap((a, b) => a < b), preLayer = new Array(n).fill(0), pre = new Array(n).fill(0);

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(j == 0) pre[j] = matrix[i][j];
            else pre[j] = pre[j - 1] ^ matrix[i][j];

            preLayer[j] = preLayer[j] ^ pre[j];

            minHeap.insert(preLayer[j]);

            if(minHeap.size() > k) minHeap.extract();
        }
    }

    return minHeap.extract();
};

/* LC双百解法1 */
/* 桶，有效节省空间 */
const kthLargestValue = (matrix, k) => {
    const m = matrix.length, n = matrix[0].length;
    let pre = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            pre[i][j] = pre[i - 1][j - 1] ^ pre[i - 1][j] ^ pre[i][j - 1] ^ matrix[i - 1][j - 1];
        }
    }

    let maxN = -Infinity;

    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            maxN = Math.max(maxN, pre[i][j]);
        }
    }

    let ans = new Array(maxN + 1).fill(0);

    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            ans[pre[i][j]]++;
        }
    }

    let ck = 0;

    for(let i = maxN; i >= 0; i--){
        if(ans[i] != 0) ck += ans[i];
        if(ck >= k) return i;
    }
};

/* LC双百解法2 */
/* 也是桶，不过是哈希表的桶 */
const quickSort = (list) => {
    if(list.length < 2) return list;

    const midValue = list[0], left = [], right = [];

    for(let i = 1; i < list.length; i++){
        list[i] > midValue ? left.push(list[i]) : right.push(list[i]);
    }

    return quickSort(left).concat(midValue, quickSort(right));
};

const kthLargestValue = (matrix, k) => {
    let record = [];
    const map = new Map();
    const m = matrix.length, n = matrix[0].length;

    for(let i = 0; i < m; i++){
        let line = 0;
        let temp = [];

        for(let j = 0; j < n; j++){
            line ^= matrix[i][j];
            const v = i == 0 ? line : record[j] ^ line;

            temp.push(v);

            if(map.has(v)) map.set(v, map.get(v) + 1);
            else map.set(v, 1);
        }

        record = temp;
    }

    const sort = quickSort([...map.keys()]);
    let count = 0;

    for(const num of sort){
        count += map.get(num);
        if(count >= k) return num;
    }
};