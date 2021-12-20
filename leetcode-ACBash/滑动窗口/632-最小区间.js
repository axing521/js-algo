/***
 * @creater:ACBash
 * @create_time:21-12-19 15:15:0
 * @last_modify:ACBash
 * @modify_time:21-12-20 16:58:26
 * @line_count:133
 **/

/* 堆的tag，滑动窗口解，蚌 */
const smallestRange = (nums) => {
    const len = nums.length;
    let allNums = [], map = {};
    let left = 0, count = 0, minLen = Infinity, minStart = 0;

    for(let i = 0; i < len; i++){
        map[i] = 0;

        for(let j = 0; j < nums[i].length; j++){
            allNums.push({
                "num": nums[i][j],
                "type": i
            });
        }
    }   //元组处理方法

    allNums.sort((a, b) => a.num - b.num);  //化矩阵为列表，这样就又可以当作LC-719用滑动窗口处理.

    for(let right = 0; right < allNums.length; right++){
        if(!map[allNums[right].type]) count++;
        map[allNums[right].type]++;

        while(count == len && left <= right){
            if(allNums[right].num - allNums[left].num < minLen){
                minLen = allNums[right].num - allNums[left].num;
                minStart = allNums[left].num;
            }

            map[allNums[left].type]--;

            if(!map[allNums[left].type]) count--;

            left++;
        }
    }

    return [minStart, minStart + minLen];
};

/* 类似丑数的堆 */
const defaultCmp = (a, b) => a[0] > b[0];
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

class Heap{
    constructor(cmp = defaultCmp){
        this.container = [];
        this.cmp = cmp;
        this.end = Infinity;
    }

    insert(val){
        this.end = Math.min(this.end, val[0]);

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

const smallestRange = (nums) => {
    let maxHeap = new Heap(), len = [], minStart = 0, minLen = Infinity, max;

    for(let i = 0; i < nums.length; i++){
        len[i] = nums[i].length;

        maxHeap.insert([nums[i][--len[i]], i]);
    }

    minStart = maxHeap.end;
    minLen = maxHeap.top()[0] - minStart;

    while(len[maxHeap.top()[1]]){
        max = maxHeap.extract();

        maxHeap.insert([nums[max[1]][--len[max[1]]], max[1]]);

        if(maxHeap.top()[0] - maxHeap.end <= minLen){
            minLen = maxHeap.top()[0] - maxHeap.end;
            minStart = maxHeap.end;
        }
    }

    return [minStart, minStart + minLen];
};