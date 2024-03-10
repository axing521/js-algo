// 给定一个整数数组nums，有一个大小为k的滑动窗口从数组左侧移到右侧，返回窗口中的最大值
// 数组模拟的双端队列，维护一个单调减队列

const func1 = (nums, k) => {
    const deque = [], ans = [];

    for(let i = 0; i < nums.length; i++){
        while(deque[0] < i - k + 1) deque.shift();

        while(nums[deque[deque.length - 1]] < nums[i]) deque.pop();

        deque.push(i);

        if(i - k + 1 >= 0){
            ans.push(nums[deque[0]]);
        }
    }

    return ans;
}