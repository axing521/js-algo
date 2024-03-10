// 在整数数组nums中，找出一个具有最大和的连续子数组，返回最大和
// 滑动窗口思想，但不是用快慢指针，而是前缀和pre，连续子数组的和是当前前缀和与之前某个最小的前缀和的差值

const func1 = nums => {
    let pre = 0,
        min = 0,
        maxSpan = nums[0];

    for (let i = 0; i < nums.length; i++) {
        pre += nums[i];
        maxSpan = Math.max(maxSpan, pre - min);
        min = Math.min(min, pre);
    }

    return maxSpan;
};

// DP: Q(list, i) = Math.max(0, Q(list, i - 1)) + list[i]

const func2 = nums => {
    let max = -Infinity;
    let dp = 0;

    for (let i = 0; i < nums.length; i++) {
        dp = Math.max(0, dp) + nums[i];
        max = Math.max(max, dp);
    }

    return max;
};
