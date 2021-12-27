/***
 * @creater:ACBash
 * @create_time:21-12-27 13:32:1
 * @last_modify:ACBash
 * @modify_time:21-12-27 15:22:32
 * @line_count:144
 **/

/* 哈希 + 集合，API怪 */
const topKFrequent = (nums, k) => {
    let map = {}, sorted = [...new Set(nums)];

    for(const num of nums){
        if(!map[num]) map[num] = 0;
        map[num]++;
    }

    sorted = sorted.map(num => [num, map[num]]);

    sorted.sort((a, b) => b[1] - a[1]);

    return sorted.slice(0, k).map(val => val[0]);
};

const topKFrequent = (nums, k) => {
    let map = new Map(), sorted = [...new Set(nums)];

    for(const num of nums){
        if(!map.has(num)) map.set(num, 0);
        map.set(num, map.get(num) + 1);
    }

    sorted.sort((a, b) => map.get(b) - map.get(a));

    return sorted.slice(0, k);
};

/* 哈希 + 最小堆 */
/* 还可以最大堆，想想最大堆和最小堆的优劣比较？ */
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

const topKFrequent = (nums, k) => {
    let map = new Map(), sorted = [...new Set(nums)], minHeap = new Heap((a, b) => a[1] < b[1]);

    for(const num of nums){
        if(!map.has(num)) map.set(num, 0);
        map.set(num, map.get(num) + 1);
    }

    sorted = sorted.map(num => [num, map.get(num)]);

    for(const val of sorted){
        minHeap.insert(val);

        if(minHeap.size() > k) minHeap.extract();
    }

    return minHeap.container.map(val => val[0]);
};

/* 快排?? */

/* 桶排序 */
const topKFrequent = (nums, k) => {
    let map = new Map();

    for(const num of nums){
        if(!map.has(num)) map.set(num, 0);
        map.set(num, map.get(num) + 1);
    }

    if(map.size <= k) return [...map.keys()];

    return bucketSort(map, k);
};

const bucketSort = (map, k) => {
    let arr = [], ans = [];

    map.forEach((val, key) => {
        if(!arr[val]) arr[val] = [];
        arr[val].push(key);
    });

    for(let i = arr.length - 1; i >= 0 && ans.length < k; i--){
        if(arr[i]) ans.push(...arr[i]);
    }

    return ans;
};