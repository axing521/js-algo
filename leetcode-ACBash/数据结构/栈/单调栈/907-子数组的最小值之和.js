/***
 * @creater:ACBash
 * @create_time:22-10-28 17:54:40
 * @last_modify:ACBash
 * @modify_time:22-10-28 18:30:29
 * @line_count:62
 **/

//单调栈 + 左右序列
const sumSubarrayMins = (nums) => {
    const n = nums.length;
    let left = new Array(n).fill(0);
    let right = new Array(n).fill(0);
    let monoStack = [];
    let ans = 0;
    const MOD = 1000000007;

    for(let i = 0; i < n; i++){
        while(monoStack.length && nums[monoStack[monoStack.length - 1]] >= nums[i]){
            monoStack.pop();
        }
        
        left[i] = i - (monoStack.length ? monoStack[monoStack.length - 1] : -1);
        monoStack.push(i);
    }

    monoStack = [];

    for(let i = n - 1; i >= 0; i--){
        while(monoStack.length && nums[monoStack[monoStack.length - 1]] > nums[i]){
            monoStack.pop();
        }

        right[i] = monoStack.length ? monoStack[monoStack.length - 1] - i : n - i;
        monoStack.push(i);
    }

    for(let i = 0; i < n; i++){
        ans = (ans + left[i] * right[i] * nums[i]) % MOD;
    }

    return ans;
};

//DP，表示以 i 结尾的最小值之和。
//DP[i] = k * nums[i] + (monoStack.length ? dp[i - k] : 0)
//k表示左边序列的长度
const sumSubarrayMins = (nums) => {
    const n = nums.length;
    let dp = new Array(n).fill(0);
    let monoStack = [];
    let ans = 0;
    const MOD = 1000000007;

    for(let i = 0; i < n; i++){
        while(monoStack.length && nums[monoStack[monoStack.length - 1]] > nums[i]){
            monoStack.pop();
        }

        const k = i - (monoStack.length ? monoStack[monoStack.length - 1] : -1);
        
        dp[i] = k * nums[i] + (monoStack.length ? dp[i - k] : 0);
        
        ans = (ans + dp[i]) % MOD;

        monoStack.push(i);
    }

    return ans;
};