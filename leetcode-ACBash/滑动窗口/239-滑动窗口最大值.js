/***
 * @creater:ACBash
 * @create_time:21-10-20 14:35:29
 * @last_modify:ACBash
 * @modify_time:21-10-20 16:27:46
 * @line_count:138
 **/

/* 暴力法，超时 */
const maxSlidingWindow = (nums, k) => {
    let max = -Infinity, ans = [];
    for(let i=0; i<=nums.length-k; i++){
        max = -Infinity;
        for(let j=i; j<i+k; j++){
            max = Math.max(max, nums[j]);
        }
        ans.push(max);
    }
    return ans;
};

/* 单调队列，双端队列，滑动窗口，5000ms，因为是数组模拟的队列 */
const maxSlidingWindow = (nums, k) => {
    //deque存放的是索引
    const deque = [], ans = [];
    for(let i=0; i<nums.length; i++){
        while(deque[0] < i-k+1){
            deque.shift();
        }

        while(nums[deque[deque.length-1]] < nums[i]){
            deque.pop();
        }

        deque.push(i);

        if(i >= k-1){
            ans.push(nums[deque[0]]);
        }
    }

    return ans;
};

/* 用链表写的队列，400ms */
class Deque{
    constructor(){
        this.count=0;
        this.lowestCount=0;
        this.items={};
    }
    addFront(element) {
        if (this.isEmpty()) {
          this.addBack(element);
        } else if (this.lowestCount > 0) {
          this.lowestCount--;
          this.items[this.lowestCount] = element;
        } else {
          for (let i = this.count; i > 0; i--) {
            this.items[i] = this.items[i - 1];
          }
          this.count++;
          this.lowestCount=0;
          this.items[0] = element;
        }
      }
    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }
    removeFront() {
        if (this.isEmpty()) {
          return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    removeBack() {
        if (this.isEmpty()) {
          return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peekFront() {
        if (this.isEmpty()) {
          return undefined;
        }
        return this.items[this.lowestCount];
    }
    peekBack() {
        if (this.isEmpty()) {
          return undefined;
        }
        return this.items[this.count - 1];
    }
    isEmpty() {
        return this.size() === 0;
    }
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    size() {
        return this.count - this.lowestCount;
    }
    toString() {
        if (this.isEmpty()) {
          return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
          objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

const maxSlidingWindow = (nums, k) => {
    //deque存放的是索引
    const deque = new Deque(), ans = [];
    for(let i=0; i<nums.length; i++){
        while(deque.peekFront() < i-k+1){
            deque.removeFront();
        }

        while(nums[deque.peekBack()] < nums[i]){
            deque.removeBack();
        }

        deque.addBack(i);

        if(i >= k-1){
            ans.push(nums[deque.peekFront()]);
        }
    }

    return ans;
};

console.log(maxSlidingWindow([4,-2], 2));