// 给定一个整数数组nums，找到其中最长严格递增子序列的长度（子序列是可以不连续的数组）
// DP，在出现nums[j] < nums[i]时, dp[i] = Math.max(dp[i], dp[j] + 1);

const func1 = nums => {
    const len = nums.length;
    let dp = new Array(len).fill(1);

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
};
