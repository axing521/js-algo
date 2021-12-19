/***
 * @creater:ACBash
 * @create_time:21-12-19 14:0:35
 * @last_modify:ACBash
 * @modify_time:21-12-19 15:15:2
 * @line_count:108
 **/

/* 固定堆，空间爆了 */
const defaultCmp = (a, b) => a > b; //默认最大堆
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

class Heap{
    constructor(cmp = defaultCmp){
        this.container = [];
        this.cmp = cmp;
    }

    size(){
        return this.container.length;
    }

    insert(val){
        const {container, cmp} = this;
        
        container.push(val);
        let index = container.length - 1;

        while(index){
            let parent = Math.floor((index - 1) / 2);

            if(cmp(container[parent], container[index])) return;

            swap(container, index, parent);

            index = parent;
        }
    }

    top(){
        return this.container[0];
    }

    extract(){
        const {container, cmp} = this;

        if(!container.length) return undefined;

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
}

const smallestDistancePair = (nums, k) => {
    const len = nums.length;
    let maxHeap = new Heap();

    for(let i = 0; i < len - 1; i++){
        for(let j = i + 1; j < len; j++){
            maxHeap.insert(Math.abs(nums[i] - nums[j]));

            if(maxHeap.size() > k) maxHeap.extract();
        }
    }

    return maxHeap.top();
};

/* 和1439的二分很像 */
/* 滑动窗口 */
const smallestDistancePair = (nums, k) => {
    nums.sort((a, b) => a - b);

    const len = nums.length;
    let left = 0, right = nums[len - 1] - nums[0];

    const count_not_greater_than = (mid) => {
        let slow = 0, ans = 0;

        for(let fast = 0; fast < len; fast++){
            while(nums[fast] - nums[slow] > mid) slow++;

            ans += fast - slow;
        }

        return ans;
    };  //快慢指针，滑动窗口查找

    while(left <= right){
        const mid = (left + right) >> 1;

        if(count_not_greater_than(mid) >= k) right = mid - 1;
        else left = mid + 1;
    }

    return left;
};