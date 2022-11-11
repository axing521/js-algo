/***
 * @creater:ACBash
 * @create_time:22-11-11 15:16:47
 * @last_modify:ACBash
 * @modify_time:22-11-11 17:25:7
 * @line_count:99
 **/

//最小堆
const defaultCmp = (a, b) => a > b;
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

class Heap{
    constructor(cmp = defaultCmp){
        this.cmp = cmp;
        this.container = [];
    }

    insert(val){
        const {cmp, container} = this;
        container.push(val);
        const len = container.length;
        let index = len - 1, parent = (index - 1) >> 1;

        while(index){
            if(cmp(container[parent], container[index])) break;
            swap(container, index, parent);
            index = parent;
            parent = (index - 1) >> 1;    
        }
    }

    extract(){
        const {cmp, container} = this;
        if(container.length == 0 || container.length == 1) return container.pop();
        swap(container, 0, container.length - 1);
        const ans = container.pop();
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

        return ans;
    }

    top(){
        return this.container[0];
    }

    size(){
        return this.container.length;
    }
}

const findKthLargest = (nums, k) => {
    let minHeap = new Heap((a, b) => a < b);

    for(const num of nums){
        minHeap.insert(num);

        if(minHeap.size() > k) minHeap.extract();
    }

    return minHeap.top();
};

//快速排序
const findKthLargest = (nums, k) => {
    return quick(nums, 0, nums.length - 1, nums.length - k);
};

const quick = (arr, left, right, k) => {
    let index;  //划分主元
    if(left < right){
        index = partition(arr, left, right);
        if(k == index) return arr[index];
        else if(k < index) return quick(arr, left, index - 1, k);
        else return quick(arr, index + 1, right, k);
    }
    return arr[left];
};
//他的作用是将left到right范围的值按照datum基准值，小的在左边，大的在右边，通过交换等手段，最后返回datum的索引值，左边都是小于等于datum的，右边全是大于的
const partition = (arr, left, right) => {
    const datum = arr[Math.floor(Math.random() * (right - left + 1)) + left];
    
    while(left < right){
        while(arr[left] < datum){
            left++;
        }
        while(arr[right] > datum){
            right--;
        }
        if(left < right) swap(arr, left, right);
        if(arr[left] == arr[right] && left != right) left++;
    }

    return left;
}

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];