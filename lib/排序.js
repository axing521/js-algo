/***
 * @creater:ACBash
 * @create_time:22-11-16 12:25:20
 * @last_modify:ACBash
 * @modify_time:22-11-16 19:12:46
 * @line_count:211
 **/

//以LC-912排序数组为例，sortArray = (nums) => {} return nums;

/**
 * 1.快速排序
 * 参考LC-215 TopK问题
 * 分而治之的思想，利用partition将left到right范围的值按照datum基准值，小的在左边，大的在右边，
 * 通过交换等手段，最后返回datum的索引值，左边都是小于等于datum的，右边全是大于的
 */
const sortArray = (nums, left = 0, right = nums.length - 1) => {
    if(left == right) return nums;

    let index = partition(nums, left, right);

    if(index - 1 > left) sortArray(nums, left, index - 1);
    if(index + 1 < right) sortArray(nums, index + 1, right);

    return nums;
};

const partition = (nums, left, right) => {
    const datum = nums[Math.floor(Math.random() * (right - left + 1)) + left];

    while(left < right){
        while(nums[left] < datum){
            left++;
        }
        while(nums[right] > datum){
            right--;
        }
        if(left < right) swap(nums, left, right);
        if(nums[left] == nums[right] && left != right) left++;
    }

    return left;
};

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

/**
 * 2.冒泡排序
 * 两层循环，外循环来确定擂台赛的擂主，内循环来遍历挑战擂主的人，交换的是值
 */
const sortArray = (nums) => {
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] > nums[j]) swap(nums, i, j);
        }
    }
    return nums;
};

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

/**
 * 3.选择排序
 * 两层循环，外循环确定擂台赛擂主索引，内循环来遍历挑战者，确定最小值索引，最后交换索引
 */
const sortArray = (nums) => {
    for(let i = 0; i < nums.length - 1; i++){
        let indexMin = i;
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] > nums[j]) indexMin = j;
        }
        if(indexMin != i) swap(nums, i, indexMin);
    }
    return nums;
};

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

/**
 * 4.堆排序
 * 手写最小堆，将数组全部写进最小堆，然后一个一个取出来
 * 这种方法不是原地修改数组，要原地修改数组，要将堆化的逻辑抽离出来写成一个函数，对数组调用这个函数来实现，而不是采用堆的数据结构
 */
const sortArray = (nums) => {
    let minHeap = new Heap((a, b) => a < b);
    
    for(const num of nums){
        minHeap.insert(num);
    }

    let ans = [];
    let n = nums.length;

    while(n--){
        ans.push(minHeap.extract());
    }

    return ans;
};

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
        const len = container.length;
        let index = len - 1;

        while(index){
            let parent = (index - 1) >> 1;
            if(cmp(container[parent], container[index])) break;
            swap(container, index, parent);
            index = parent;
        }
    }

    extract(){
        const {cmp, container} = this;
        if(container.length == 0 || container.length == 1) return container.pop();
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
        return this.container[0];
    }

    size(){
        return this.container.length;
    }
}

/**
 * 5.堆排序
 * 将数组最大堆化，然后swap(0, --size),然后重新堆化heapify(arr, 0, size);
 * 这种是原地修改数组，使用heapify函数
 */
const sortArray = (nums) => {
    let size = nums.length;
    buildHeap(nums);
    while(size--){
        swap(nums, 0, size);
        heapify(nums, 0, size);
    }
    return nums;
};

const buildHeap = (arr) => {
    for(let i = arr.length >> 1; i >= 0; i--){
        heapify(arr, i, arr.length);
    }
    return arr;
};

const heapify = (arr, index, heapSize) => {
    let largest = index;
    const left = index * 2 + 1, right = index * 2 + 2;
    
    if(left < heapSize && arr[left] > arr[index]){
        largest = left;
    }
    if(right < heapSize && arr[right] > arr[largest]){
        largest = right;
    }

    if(largest != index){
        swap(arr, index, largest);
        heapify(arr, largest, heapSize);
    }
};

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

/**
 * 6.归并排序
 * 分而治之，划分左右段，跟快排的区别是，快排是找基准值datum，小的在左边，大的在右边，归并排序是分左右段，然后合并，每一个子段都是已排序的
 */
const sortArray = (nums) => {
    const n = nums.length;
    if(n <= 1) return nums;
    
    const middle = n >> 1;
    const l = sortArray(nums.slice(0, middle));
    const r = sortArray(nums.slice(middle, n));

    return merge(l, r);
}

const merge = (left, right) => {
    let i = 0, j = 0;
    let ans = [];

    while(i < left.length && j < right.length){
        ans.push(
            left[i] < right[j] ? left[i++] : right[j++]
        );
    }

    return ans.concat(i < left.length ? left.slice(i) : right.slice(j));
};