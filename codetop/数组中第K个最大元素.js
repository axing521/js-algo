// nums, k, 返回第k个最大元素(包括相同)
// 直接快速排序, 快速排序是固定一个datum站队，如果这个datum的索引是k，那么可以直接返回

const func1 = (nums, k) => {
    return quickSort(nums, 0, nums.length - 1, nums.length - k);
};

const quickSort = (nums, left = 0, right = nums.length - 1, k) => {
    if(left < right){
        const index = partition(nums, left, right);

        if(index == k){
            return nums[k];
        }else if(index > k){
            return quickSort(nums, left, index - 1, k);
        }else if(index < k){
            return quickSort(nums, index + 1, right, k);
        }
    }
    return nums[left];
};

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
        if(left != right && arr[left] == arr[right]) left++;
    }

    return left;
};

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

// 用堆排序，最大堆最小堆都可以

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

const func2 = (nums, k) => {
    let maxHeap = new Heap((a, b) => a > b);

    for(const num of nums){
        maxHeap.insert(num);
    }

    for(let i = 0; i < k - 1; i++){
        maxHeap.extract();
    }

    return maxHeap.top();
};