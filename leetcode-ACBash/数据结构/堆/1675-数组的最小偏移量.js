/***
 * @creater:ACBash
 * @create_time:21-12-20 13:56:35
 * @last_modify:ACBash
 * @modify_time:21-12-20 17:0:35
 * @line_count:135
 **/

/* 跟LC-632一样，滑动窗口，关键点是能否看出矩阵 */
/* 1000ms, 100MB */
const minimumDeviation = (nums) => {
    const len = nums.length;
    let left = 0, map = {}, allNums = [], count = 0, minLen = Infinity;

    nums = nums.map((val) => {
        let ans = [val];

        if(val % 2 == 0){
            while(val % 2 == 0){
                ans.push(val >>= 1);
            }
        }else ans.push(val <<= 1);

        return ans;
    })

    for(let i = 0; i < len; i++){
        map[i] = 0;

        for(let j = 0; j < nums[i].length; j++){
            allNums.push({
                "num": nums[i][j],
                "type": i
            });
        }
    }

    allNums.sort((a, b) => a.num - b.num);

    for(let right = 0; right < allNums.length; right++){
        if(!map[allNums[right].type]) count++;
        map[allNums[right].type]++;

        while(count == len && left <= right){
            minLen = Math.min(minLen, allNums[right].num - allNums[left].num);
            
            map[allNums[left].type]--;
            if(!map[allNums[left].type]) count--;

            left++;
        }
    }

    return minLen;
};

/* 类似丑数的堆 */
const defaultCmp = (a, b) => a > b;
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

class Heap{
    constructor(cmp = defaultCmp){
        this.container = [];
        this.cmp = cmp;
        this.end = Infinity;
    }

    insert(val){
        this.end = Math.min(this.end, val);

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

const minimumDeviation = (nums) => {
    let maxHeap = new Heap(), ans = Infinity, val, max;

    for(let i = 0; i < nums.length; i++){
        val = nums[i] % 2 ? nums[i] * 2 : nums[i];

        maxHeap.insert(val);
    }   //将数组所有数变成偶数，插入堆

    while(maxHeap.top() % 2 == 0){
        max = maxHeap.extract();

        maxHeap.insert(max >> 1);

        ans = Math.min(ans, maxHeap.top() - maxHeap.end);
    }   //遇到奇数了，已经是最后的了，跳出

    return ans;
};